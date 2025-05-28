'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const firstName = formData.get('first-name')
  const lastName = formData.get('last-name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const userType = formData.get('user-type')
  const subject = formData.get('subject')
  const message = formData.get('message')

  try {
    await resend.emails.send({
      from: 'HoyaHoye Contact <onboarding@resend.dev>',
      to: 'hoyahoye2017@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
User Type: ${userType}
Subject: ${subject}

Message:
${message}
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
} 