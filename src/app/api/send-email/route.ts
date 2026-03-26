import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.warn("Nodemailer: Missing EMAIL_USER or EMAIL_PASS in environment variables.");
      // For demonstration/dev purposes if no .env is setup, we simulate success
      return NextResponse.json(
        { message: "Simulated success (Missing SMTP credentials in .env)" },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: email,
      to: "paritoshrahul7@gmail.com",
      subject: `New Portfolio Message from ${name}`,
      text: `Hello Paritosh,\n\nYou have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message: </strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
