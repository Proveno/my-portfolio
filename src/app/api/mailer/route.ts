import { NextResponse } from 'next/server'
import axios from 'axios'

type EmailRequestBody = {
  toEmail: string
  fromName?: string
  toName?: string

  subject: string
  text?: string
  html?: string
}

export async function POST(request: Request) {
  try {
    const body: EmailRequestBody = await request.json()

    const { toEmail, fromName, toName, subject, text, html } = body

    if (!toEmail || !subject || (!text && !html)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const response = await axios.post(
      'https://api.mailersend.com/v1/email',
      {
        from: {
          email: 'MS_JhrYNs@test-z0vklo6wkm1l7qrx.mlsender.net',
          name: fromName || 'Proven',
        },
        to: [
          {
            email: toEmail,
            name: toName || 'Recipient',
          },
        ],
        subject,
        text,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return NextResponse.json(
      { message: 'Email sent successfully', data: response.data },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({ error: 'Failed to send email', err }, { status: 500 })
  }
}
