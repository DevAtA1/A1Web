import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>New Message from, {name}!</h1>
    <p>Phone: {phone}</p>
    <p>Email Address: {email}</p>
    <p>Message: {message}</p>
  </div>
);

export default EmailTemplate;
