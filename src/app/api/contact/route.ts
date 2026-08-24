import { NextResponse } from "next/server";

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
