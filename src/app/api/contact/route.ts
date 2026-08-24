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

    const webhookUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (webhookUrl) {
      // Forward submission to Google Apps Script Web App
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Google Sheets webhook error:", await response.text());
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
