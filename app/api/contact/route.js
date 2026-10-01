import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      organisation,
      designation,
      phone,
      email,
      city,
      website,
      enquiryCategory,
      businessChallenge,
      preferredContactMethod,
      preferredDateTime,
      hp_field, // Honeypot field
    } = body;

    // 1. Honeypot spam check: if filled, quietly succeed without sending mail
    if (hp_field) {
      console.warn("[Contact API] Bot detected via honeypot field. Discarding.");
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 2. Server-side validation
    if (!name || !email || !phone || !businessChallenge) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields (Name, Email, Phone, Challenge)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // 3. Optional Resend or Nodemailer delivery if env keys exist
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "contact@dheerajaggarwal.com";

    if (resendApiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
          from: "Dheeraj Aggarwal Web <onboarding@resend.dev>",
          to: recipientEmail,
          subject: `New Inquiry [${enquiryCategory || "General"}]: ${name} (${organisation || "Direct"})`,
          text: `
Name: ${name}
Designation: ${designation || "N/A"}
Organisation: ${organisation || "N/A"}
Email: ${email}
Phone: ${phone}
City: ${city || "N/A"}
Website/Social: ${website || "N/A"}
Category: ${enquiryCategory || "General Consulting"}
Contact Preference: ${preferredContactMethod || "Email/Phone"}
Preferred Time: ${preferredDateTime || "Flexible"}

Business Objective & Challenge:
${businessChallenge}
          `,
        });
      } catch (mailError) {
        console.error("[Contact API] Error sending via Resend:", mailError);
        // Do not crash client inquiry submission if mail driver fails
      }
    } else {
      console.log("[Contact API] Mock mode (RESEND_API_KEY not set). Inquiry recorded:", {
        name,
        email,
        phone,
        organisation,
        enquiryCategory,
        businessChallenge,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for sharing your objective. Dheeraj's executive office will review and respond within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API] Exception occurred:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please connect directly via WhatsApp or email." },
      { status: 500 }
    );
  }
}
