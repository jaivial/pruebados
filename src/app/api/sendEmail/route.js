// pages/api/send-email.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request){
  try {
    const { nombre, apellido, email, servicio, telefono, motivoConsulta } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jaimebillanueba99@gmail.com',
      pass: 'trrm wazr uyyb obkx',
    },
  });

  const mailOptions = {
    from: 'jaimebillanueba99@gmail.com',
    to: email,
    subject: 'New Contact Form Submission',
    text: `
      Name: ${nombre} ${apellido}
      Email: ${email}
      Service: ${servicio}
      Phone: ${telefono}
      Message: ${motivoConsulta}
    `,
  };

  await transporter.sendMail(mailOptions);

  return NextResponse.json({message:"Email sent Successfully"}, { status : 200})


  } catch (error) {
    return NextResponse.json({message:"Failed To Send Email"}, { status : 500})

  }
}

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { nombre, apellido, email, servicio, telefono, motivoConsulta } = req.body;

//       // Create a Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'jaimebillanueba99@gmail.com',
//           pass: 'trrm wazr uyyb obkx',
//         },
//       });

//       // Define email options
//       const mailOptions = {
//         from: 'jaimebillanueba99@gmail.com',
//         to: email,
//         subject: 'New Contact Form Submission',
//         text: `
//           Name: ${nombre} ${apellido}
//           Email: ${email}
//           Service: ${servicio}
//           Phone: ${telefono}
//           Message: ${motivoConsulta}
//         `,
//       };

//       // Send email
//       await transporter.sendMail(mailOptions);

//       NextResponse.json({ success: true, error: 'Email sent successfully' }, { status: 200 }).send(res);
//     } catch (error) {
//       console.error('Error sending email:', error);
//       NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 }).send(res);
//     }
//   } else {
//     NextResponse.json({ success: false, error: 'Method Not Allowed' }, { status: 405 }).send(res);
//   }
// }