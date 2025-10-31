import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, honey } = body;

    // Anti-bot + required fields
    if (honey) return Response.json({ error: "Bot detected" }, { status: 400 });
    if (!name || !email || !message)
      return Response.json({ error: "All fields required" }, { status: 400 });

    // Create transporter (uses Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Message body
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portifolio Contact ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Error sending email" }, { status: 500 });
  }
}
