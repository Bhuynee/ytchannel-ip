const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const ip =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress || "unknown";
  const userAgent = req.headers["user-agent"];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "bhuy8305@gmail.com",
    subject: "New IP Logged",
    text: `IP: ${ip}\nUser-Agent: ${userAgent}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent!");
    res.status(200).send("OK");
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).send("Email failed");
  }
};