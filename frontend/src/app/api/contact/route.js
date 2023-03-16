import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export default async function POST(request) {
 const data = request.body;
 if (
  !data ||
  !data.nameSurname ||
  !data.email ||
  !data.message ||
  !data.phone
 ) {
  return new Response.json({ message: "Bad request" });
 }
 const mailData = {
  html: `
 <div><strong>Email:</strong> ${data.subject}</div>
    <br/>
    <div><strong>Name:</strong> ${data.nameSurname}</div> 
    <br/>
    <div><strong>Email:</strong> ${data.email}</div>
    <br/>
    <div><strong>Phone:</strong> ${data.phone}</div>
    <br/>
    <div><strong>Message:</strong> ${data.message}</div>
    <br/>
    <p>Sent from:
      ${data.email}</p>`,
 };

 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: email,
   pass,
  },
  secure: true,
 });

 const mailOptions = {
  from: data.email,
  to: email,
 };

 try {
  await transporter.sendMail({
   ...mailData,
   ...mailOptions,
   subject: data.subject,
  });

  return new Response.json({ success: true });
  console.log(data);
 } catch (err) {
  console.log(err);
  return new Response.json({ message: err.message });
 }
}
