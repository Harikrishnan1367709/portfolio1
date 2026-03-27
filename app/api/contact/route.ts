import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || '23z132@psgietch.ac.in';
const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return Boolean(url && key && !url.includes('placeholder') && !key.includes('placeholder'));
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const resumeEntry = formData.get('resume');

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        {
          error:
            'Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in environment variables.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone || 'Not provided'));
    const safeCompany = escapeHtml(String(company || 'Not provided'));
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br />');
    const attachments: nodemailer.SendMailOptions['attachments'] = [];

    if (resumeEntry instanceof File && resumeEntry.size > 0) {
      if (resumeEntry.size > MAX_RESUME_SIZE_BYTES) {
        return NextResponse.json(
          { error: 'Resume/CV file size must be 5MB or less.' },
          { status: 400 }
        );
      }

      const fileName = resumeEntry.name || 'resume';
      const extension = fileName.split('.').pop()?.toLowerCase() || '';
      const extensionAllowed = ['pdf', 'doc', 'docx'].includes(extension);
      const mimeAllowed = ALLOWED_RESUME_MIME_TYPES.has(resumeEntry.type);

      if (!extensionAllowed && !mimeAllowed) {
        return NextResponse.json(
          { error: 'Only PDF, DOC, or DOCX files are allowed for Resume/CV.' },
          { status: 400 }
        );
      }

      const fileBuffer = Buffer.from(await resumeEntry.arrayBuffer());
      attachments.push({
        filename: fileName,
        content: fileBuffer,
        contentType: resumeEntry.type || undefined,
      });
    }

    try {
      await transporter.sendMail({
        from: smtpFrom,
        to: CONTACT_RECEIVER_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}

Resume/CV Attached: ${attachments.length ? 'Yes' : 'No'}
        `.trim(),
        html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
  <p><strong>Resume/CV Attached:</strong> ${attachments.length ? 'Yes' : 'No'}</p>
        `,
  attachments,
      });
    } catch (mailError) {
      console.error('SMTP error:', mailError);
      const messageText =
        mailError instanceof Error ? mailError.message : 'Unknown SMTP error';

      return NextResponse.json(
        {
          error: `Failed to send email. ${messageText}`,
        },
        { status: 500 }
      );
    }

    let data = null;
    let dbSaved = false;

    if (isSupabaseConfigured()) {
      const { data: insertedData, error: supabaseError } = await supabase
        .from('contacts')
        .insert([
          {
            name,
            email,
            phone: phone || null,
            company: company || null,
            message,
            status: 'new',
          },
        ])
        .select();

      if (supabaseError) {
        console.error('Supabase error (non-blocking):', supabaseError);
      } else {
        data = insertedData;
        dbSaved = true;
      }
    }

    return NextResponse.json(
      {
        message: 'Contact form submitted successfully and email sent.',
        data,
        dbSaved,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    const messageText =
      error instanceof Error ? error.message : 'Unknown server error';

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === 'development'
            ? `Internal server error: ${messageText}`
            : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
