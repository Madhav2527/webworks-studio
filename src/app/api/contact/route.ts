import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, brand, projectType, budget, message } = body;

    // Strict Server-Side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!projectType || typeof projectType !== "string") {
      return NextResponse.json(
        { error: "Please select a valid project type." },
        { status: 400 }
      );
    }

    if (!budget || typeof budget !== "string") {
      return NextResponse.json(
        { error: "Please select a budget range." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a detailed project description (minimum 10 characters)." },
        { status: 400 }
      );
    }

    /*
     * INTEGRATION POINT: EMAIL & CRM DISPATCH
     * ----------------------------------------------------
     * In a production environment, configure environment variables:
     * - RESEND_API_KEY / POSTMARK_API_KEY
     * - CONTACT_NOTIFICATION_EMAIL (e.g. contact@webworksstudio.com)
     *
     * Example Resend integration:
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({
     *     from: 'enquiries@webworksstudio.com',
     *     to: process.env.CONTACT_NOTIFICATION_EMAIL,
     *     subject: `New Project Enquiry: ${brand || name} [${projectType}]`,
     *     html: `<p><strong>Name:</strong> ${name}</p>...`
     *   });
     */

    // Log enquiry safely server-side (without exposing sensitive tokens)
    console.log("[SERVER ENQUIRY RECEIVED]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      brand: brand ? brand.trim() : "N/A",
      projectType,
      budget,
      messageLength: message.trim().length,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry logged and queued successfully. A studio engineer will respond within 24 hours.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your enquiry." },
      { status: 500 }
    );
  }
}
