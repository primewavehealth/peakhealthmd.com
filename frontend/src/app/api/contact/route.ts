import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

interface EmailProp {
 nameSurname: string;
 email: string;
 message: string;
 subject: string;
 phone: number;
}
export async function POST(request: NextRequest): Promise<Response> {
 const data: EmailProp = await request.json();
 if (
  !data ||
  !data.nameSurname ||
  !data.subject ||
  !data.email ||
  !data.message ||
  !data.phone
 ) {
<<<<<<< HEAD
  return NextResponse.json({ message: "Bad request" });
 }

=======
  console.log(data);
  return NextResponse.json({ message: "Bad request" });
 }

 console.log(data);
>>>>>>> 1a5fa38bb3153229fa48df114da92b754ae60a8d
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
      ${email}</p>`,
 };

 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: email,
   pass: pass,
  },
  secure: true,
  tls: {
   rejectUnauthorized: false,
  },
 });

 const mailOptions = {
  from: email,
  to: "info@peakhealthmd.com",
 };

 try {
  await transporter.sendMail({
   ...mailData,
   ...mailOptions,
   subject: data.subject,
  });

  return NextResponse.json({ success: true });
 } catch (err: any) {
  return NextResponse.json({ message: err.message });
 }
}
