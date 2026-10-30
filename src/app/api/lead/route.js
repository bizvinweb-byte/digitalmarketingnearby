import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, businessName, service, requirements, source } = data;

    // Strict Server-Side Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name." },
        { status: 400 }
      );
    }

    const cleanPhone = (phone || "").replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid 10-digit Indian phone number." },
        { status: 400 }
      );
    }

    if (!businessName || businessName.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide your business name." },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Please select a required service." },
        { status: 400 }
      );
    }

    if (!requirements || requirements.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Please tell us briefly about your requirements." },
        { status: 400 }
      );
    }

    const leadPayload = {
      type: "DIGITAL_MARKETING",
      site: "digitalmarketingnearby",
      pageUrl: "https://digitalmarketingnearby.com",
      name: name.trim(),
      phone: cleanPhone,
      businessName: businessName.trim(),
      service,
      requirements: requirements.trim(),
      source: source || "Website Consultation Popup",
      submittedAt: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    console.log("=== NEW CONSULTATION LEAD RECEIVED ===");
    console.log(leadPayload);

    // Forward to Google Sheets Webhook if URL is configured
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });
      } catch (sheetErr) {
        console.error("Google Sheets Webhook forward error:", sheetErr);
        // Do not fail user response if sheets endpoint is slow or temporarily unreachable
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We have received your consultation request.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation lead:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again or contact via WhatsApp." },
      { status: 500 }
    );
  }
}
