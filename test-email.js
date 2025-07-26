import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_PORT === "465", // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOptions = {
  from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
  to: process.env.ADMIN_EMAIL,
  subject: "SMTP Test Email",
  text: "This is a test email sent from a Node.js script.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("❌ Email failed to send:", error);
  } else {
    console.log("✅ Email sent successfully:", info.messageId);
  }
});
