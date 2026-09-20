import emailjs from "@emailjs/browser";
import { site } from "../data/content";
export type ContactPayload = { name: string; email: string; subject: string; message: string };
export async function sendContact(payload: ContactPayload) {
  const service = import.meta.env["VITE_EMAIL_SERVICE_ID"];
  const template = import.meta.env["VITE_EMAIL_TEMPLATE_ID"];
  const key = import.meta.env["VITE_EMAIL_PUBLIC_KEY"];
  if (service && template && key) {
    await emailjs.send(service, template, { from_name: payload.name, reply_to: payload.email, subject: payload.subject, message: payload.message }, { publicKey: key });
    return { fallback: false };
  }
  const body = `From: ${payload.name} (${payload.email})\n\n${payload.message}`;
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
  return { fallback: true };
}
