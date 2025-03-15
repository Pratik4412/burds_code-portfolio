const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, category } = req.body;

    const htmlContent = `
    <h2>New Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Category:</strong> ${category}</p>
    `;
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const info = await transporter.sendMail({
      from: `"Form Submission" <${process.env.EMAIL_USER}>`, // sender address
      to: process.env.EMAIL_USER, // list of receivers
      subject: `New Form Submission: ${category}`, // Subject line
      text: `New submission from ${firstName} ${lastName}`, // plain text body
      html: htmlContent, // html body
    });
    // console.log("Message sent: %s", info.messageId);
    return res.status(200).json({
      success: true,
      error: false,
      messageId: info.messageId,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(5000)
      .json({ success: false, error: true, message: error.message });
  }

  //   console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
