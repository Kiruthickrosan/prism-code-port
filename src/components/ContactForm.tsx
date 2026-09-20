import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { sendContact, type ContactPayload } from "../services/email";
const blank: ContactPayload = { name: "", email: "", subject: "", message: "" };
export function ContactForm() {
  const [form, setForm] = useState(blank); const [errors, setErrors] = useState<Partial<ContactPayload>>({}); const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle"); const [note, setNote] = useState("");
  const submit = async (event: FormEvent) => {
    event.preventDefault(); const next: Partial<ContactPayload> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (form.message.trim().length < 20) next.message = "Please write at least 20 characters.";
    setErrors(next); if (Object.keys(next).length) return;
    setStatus("sending");
    try { const result = await sendContact(form); setStatus("success"); setNote(result.fallback ? "Your email app is ready with the message filled in." : "Message sent. I’ll get back to you soon."); if (!result.fallback) setForm(blank); }
    catch { setStatus("error"); setNote("The message could not be sent. Please use the direct email link instead."); }
  };
  const field = (name: keyof ContactPayload, label: string, type = "text") => <div className={`field ${errors[name] ? "field--error" : ""}`}><label htmlFor={`contact-${name}`}>{label}</label><input id={`contact-${name}`} name={name} type={type} value={form[name]} onChange={(e)=>setForm({...form,[name]:e.target.value})} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} />{errors[name] && <small id={`contact-${name}-error`}>{errors[name]}</small>}</div>;
  return <form className="contact-form" onSubmit={submit} noValidate>{field("name","Name")}{field("email","Email","email")}{field("subject","Subject")}<div className={`field field--wide ${errors.message ? "field--error" : ""}`}><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={6} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />{errors.message && <small id="contact-message-error">{errors.message}</small>}</div><motion.button className="button button--primary field--wide" type="submit" disabled={status==="sending"} whileTap={{scale:.98}}>{status === "sending" ? "Sending…" : "Send Message"}</motion.button>{status !== "idle" && status !== "sending" && <p className={`form-note form-note--${status}`}>{note}</p>}</form>;
}
