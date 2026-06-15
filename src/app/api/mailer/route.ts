import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactRequestBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
  company?: string
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, ''),
  },
})

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 }

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const toHtml = (s: string) => escapeHtml(s).replace(/\r?\n/g, '<br>')

const card = (inner: string) =>
  `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">${inner}</div>`

const quote = (inner: string) =>
  `<div style="background-color: #ffffff; padding: 15px; border: 1px solid #eee; border-radius: 4px;"><p style="margin: 0; font-size: 14px; color: #555;">${inner}</p></div>`

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json()

    if (body.company && body.company.trim()) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    }

    const name = (body.name || '').trim()
    const email = (body.email || '').trim()
    const subject = (body.subject || '').trim()
    const message = (body.message || '').trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }
    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      subject.length > LIMITS.subject ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: 'One or more fields are too long' }, { status: 400 })
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_USER / GMAIL_APP_PASSWORD are not configured')
      return NextResponse.json({ error: 'Mailer is not configured' }, { status: 500 })
    }

    const owner = process.env.GMAIL_USER

    await transporter.sendMail({
      from: { name: 'Portfolio Contact', address: owner },
      to: owner,
      replyTo: { name, address: email },
      subject: `Portfolio contact: ${subject}`,
      text: `New message from ${name} <${email}>\n\nSubject: ${subject}\n\n${message}`,
      html: card(
        `<h2 style="color: #34d399; text-align: center;">New message received</h2>` +
          `<p style="margin: 10px 0; font-size: 16px;">From <strong>${escapeHtml(name)}</strong> (<a href="mailto:${escapeHtml(email)}" style="color: #34d399; text-decoration: none;">${escapeHtml(email)}</a>)</p>` +
          `<p style="margin: 10px 0; font-size: 16px;">Subject: <strong>${escapeHtml(subject)}</strong></p>` +
          quote(toHtml(message)) +
          `<p style="margin-top: 20px; font-size: 13px; color: #666;">Sent from the contact form on your portfolio website.</p>`,
      ),
    })

    try {
      await transporter.sendMail({
        from: { name: 'Maksym Riznyk', address: owner },
        to: { name, address: email },
        subject: 'Thank you for your message!',
        text:
          `Dear ${name},\n\n` +
          `I have received your message and will get back to you as soon as possible. ` +
          `Please note this is an automatic confirmation — no need to reply.\n\n` +
          `Here is a copy of your message:\n${message}\n\n` +
          `Best regards,\nMaksym Riznyk`,
        html: card(
          `<h2 style="color: #34d399; text-align: center;">Thank you for reaching out!</h2>` +
            `<p style="font-size: 16px; margin: 10px 0;">Dear ${escapeHtml(name)},</p>` +
            `<p style="font-size: 16px; margin: 10px 0;">I have received your message and will get back to you as soon as possible.</p>` +
            `<p style="font-size: 16px; margin: 10px 0;">Please note this is an automatic confirmation of receipt — there is no need to reply to this email. If your inquiry is urgent, you can reach me directly at <a href="mailto:${owner}" style="color: #34d399; text-decoration: none;">${owner}</a>.</p>` +
            `<p style="font-size: 16px; margin: 10px 0;">Below is a copy of your message for your reference:</p>` +
            quote(toHtml(message)) +
            `<p style="font-size: 16px; margin-top: 20px;">Best regards,<br>Maksym Riznyk</p>` +
            `<hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />` +
            `<p style="font-size: 12px; color: #666; text-align: center;">This email was sent automatically. Please do not reply.</p>`,
        ),
      })
    } catch (confirmErr) {
      console.error('Failed to send confirmation email to visitor:', confirmErr)
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (err) {
    console.error('Failed to send email:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
