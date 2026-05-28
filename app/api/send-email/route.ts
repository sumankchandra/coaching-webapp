import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { full_name, email, phone } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sumankchandra@gmail.com",
      subject: "New Coaching Lead",
      html: `
  <div style="font-family: Arial, sans-serif; padding: 10px;">
    <h2 style="color:#333;">New Coaching Lead</h2>

    <table style="border-collapse: collapse;">
      <tr>
        <td><b>Name:</b></td>
        <td>${full_name}</td>
      </tr>
      <tr>
        <td><b>Email:</b></td>
        <td>${email}</td>
      </tr>
      <tr>
        <td><b>Phone:</b></td>
        <td>${phone}</td>
      </tr>
    </table>

    <p style="margin-top:20px; color:#666;">
      Submitted from coaching web app
    </p>
  </div>
    `    
});

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}