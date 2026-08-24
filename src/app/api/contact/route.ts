import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, property, propertyType, message } = body;

    // Validate required fields
    if (!name || !email || !property) {
      return NextResponse.json(
        { error: "Missing required fields (Name, Email, Property)" },
        { status: 400 }
      );
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      property,
      propertyType: propertyType || "Not specified",
      message: message || "",
    };

    const webhookUrl =
      process.env.GOOGLE_SHEETS_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbz01ag_yFBLw1B16V5-tY69noqNn8Em0LotsnJy_jSEWzK1bcaBi0PmWhjgow-dB-c_/exec";

    if (webhookUrl) {
      // Forward submission to Google Apps Script Web App
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
    } else {
      console.log(
        "Google Sheets Script URL not configured in environment variables. Recorded submission locally:",
        payload
      );
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
