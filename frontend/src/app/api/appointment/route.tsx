import { format } from "date-fns-tz";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export async function POST(request: Request) {
 const data = await request.json();
 if (!data || !data.name || !data.phone || !data.email || !data.datetime) {
  return NextResponse.error();
 }

 const DateTime = format(new Date(data.datetime), "MM/dd/yyyy 'at' hh:mm a");

 const mailData = {
  html: `
 <body class="bg-gray-100 p-4">

    <div class="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-4">New Inquiry</h2>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Name:</label>
            <p class="text-gray-800"> ${data.name}</p>
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Phone:</label>
            <p class="text-gray-800">${data.phone}</p>
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Email:</label>
            <p class="text-gray-800">${data.email}</p>
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Service:</label>
            <p class="text-gray-800">${data.services}</p>
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Date:</label>
            <p class="text-gray-800">${DateTime}</p>
        </div>

        <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Message:</label>
            <p class="text-gray-800">${data.message}</p>
        </div>

        <p class="text-sm text-gray-500">Sent from:
      ${email}</p>
    </div>

</body>`,
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
  to: "info@primewavehealth.com",
  subject: "Website Appointment",
 };

 try {
  await transporter.sendMail({
   ...mailData,
   ...mailOptions,
  });

  return NextResponse.json({ success: true });
 } catch (err: any) {
  return NextResponse.json({ message: err.message });
 }
}
