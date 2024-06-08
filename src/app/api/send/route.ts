import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const req: { name: string; email: string; phone: string; message: string } =
      await request.json();
    const { data, error } = await resend.emails.send({
      from: "A1 Associates <onboarding@resend.dev>",
      to: ["ayushmaurya.work@gmail.com", "harshitha@a1associates.net"],
      subject: `New Message from ${req.name}`,
      react: EmailTemplate({ ...req }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
