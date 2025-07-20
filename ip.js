export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { ip } = req.body;
  const ua = req.headers["user-agent"];
  const loc = req.headers["x-vercel-ip-country"] || "Unknown";

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"IP Logger" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: "Có người mới vào link!",
    text: `IP: ${ip}\nUser-Agent: ${ua}\nLocation: ${loc}`,
  });

  res.status(200).json({ success: true });
}