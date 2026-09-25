import { NextResponse } from "next/server";
import { Resend } from "resend";

// Helper to sanitize strings and prevent Spreadsheet Formula Injection
function sanitizeString(str: unknown, maxLength: number): string {
  if (typeof str !== "string") return "";
  
  let trimmed = str.trim().slice(0, maxLength);

  // Prevent Spreadsheet Formula Injection (e.g., =CMD, +SUM, -1, @FORMULA)
  if (/^[=+\-@\t\r]/.test(trimmed)) {
    trimmed = "'" + trimmed;
  }

  return trimmed;
}

// Basic RFC 5322 compliant email regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot Bot Check (if filled, silently drop without error to fool spam bots)
    if (body.website_url_hp && body.website_url_hp.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Inquiry submitted successfully",
      });
    }

    // Extract and sanitize input fields
    const name = sanitizeString(body.name, 100);
    const email = sanitizeString(body.email, 150);
    const property = sanitizeString(body.property, 150);
    const propertyType = sanitizeString(body.propertyType, 100) || "Not specified";
    const message = sanitizeString(body.message, 2000);

    // Required field checks
    if (!name || !email || !property) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Property Name)." },
        { status: 400 }
      );
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      property,
      propertyType,
      message,
    };

    // 1. Google Sheets Webhook Submission
    const webhookUrl =
      process.env.GOOGLE_SHEETS_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbz01ag_yFBLw1B16V5-tY69noqNn8Em0LotsnJy_jSEWzK1bcaBi0PmWhjgow-dB-c_/exec";

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          redirect: "follow",
        });
        console.log("Google Sheets webhook response status:", response.status);
      } catch (err) {
        console.error("Error forwarding to Google Sheets webhook:", err);
      }
    }

    // 2. Resend Email Notification
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const { error: resendError } = await resend.emails.send({
          from: "hello@onsiteyogaandrestore.com",
          to: "hello@onsiteyogaandrestore.com",
          replyTo: email,
          subject: `New Partnership Inquiry — ${property}`,
          text: `New Partnership Inquiry\n\nContact Name: ${name}\nProperty / Organization: ${property}\nEmail Address: ${email}\nProperty Type: ${propertyType}\n\nInquiry Details:\n${message || "(None provided)"}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #262626; line-height: 1.6;">
              <h2 style="color: #262626; border-bottom: 1px solid #E8E1D7; padding-bottom: 10px;">New Partnership Inquiry</h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 180px; color: #6D6D6D;">Contact Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6D6D6D;">Property / Organization:</td>
                  <td style="padding: 8px 0;">${property}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6D6D6D;">Email Address:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #5E7052;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #6D6D6D;">Property Type:</td>
                  <td style="padding: 8px 0;">${propertyType}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #F8F5EF; border-radius: 8px; border: 1px solid #E8E1D7;">
                <p style="font-weight: bold; margin-top: 0; color: #6D6D6D;">Inquiry Details:</p>
                <p style="margin-bottom: 0; white-space: pre-wrap;">${message || "(None provided)"}</p>
              </div>
            </div>
          `,
        });

        if (resendError) {
          console.error("Resend email notification error:", resendError.message);
        }
      } catch (err) {
        console.error("Error sending notification via Resend:", err);
      }
    } else {
      console.warn("RESEND_API_KEY is not configured. Email notification skipped.");
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
