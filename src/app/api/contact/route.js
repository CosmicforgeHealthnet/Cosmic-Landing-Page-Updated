import { contactFormSchema } from "@/app/schema/contactFrom";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function POST(req) {
  try {
    const body = await req.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h4 style="color: #495057; margin-top: 0;">Message:</h4>
            <p style="line-height: 1.6; color: #212529;">
              ${validatedData.message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from your website contact form.</p>
            <p>Sender's IP: ${
              req.headers.get("x-forwarded-for") || "Unknown"
            }</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      // Also send a plain text version
      //   text: `
      //     New Contact Form Submission

      //     Name: ${validatedData.name}
      //     Email: ${validatedData.email}
      //     Subject: ${validatedData.subject}

      //     Message:
      //     ${validatedData.message}

      //     Sent at: ${new Date().toLocaleString()}
      //   `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation error", errors: err.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
