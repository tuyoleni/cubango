import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, name, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Visitor <onboarding@resend.dev>",
      to: [fromEmail, email],
      subject: "From Website",
      react: <EmailTemplate name={name} email={email} message={message} />,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}