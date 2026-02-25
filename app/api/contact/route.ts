import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, interest } = body;

    // Validate required fields
    if (!name || !email || !company || !message || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter - using environment variables for SMTP configuration
    // For Gmail, you can use App Password: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Allow sending from a different address than the authenticated user
      // This is needed when using email aliases
      tls: {
        rejectUnauthorized: false
      }
    });

    // If no SMTP credentials are provided, use a simple fallback
    // In production, you should always set SMTP credentials
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Format the interest option for display
    const interestLabels: { [key: string]: string } = {
      'b-stock-dropship': 'B-Stock Drop Ship',
      'returns-management': 'Returns Management',
      'resale-service': 'Resale as a Service',
      'general': 'General Inquiry',
    };

    const interestLabel = interestLabels[interest] || interest;

    // Email content
    // Format: "Display Name <email@domain.com>" or just "email@domain.com"
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const fromDisplayName = process.env.SMTP_FROM_NAME || 'Toycycle';
    const fromEmail = fromDisplayName ? `${fromDisplayName} <${fromAddress}>` : fromAddress;
    
    // Log for debugging (remove in production if needed)
    console.log('Sending email from:', fromEmail);
    console.log('SMTP_FROM env var:', process.env.SMTP_FROM);
    
    const mailOptions = {
      from: fromEmail,
      replyTo: fromAddress, // Set reply-to to the alias address
      to: ['sarfraz@toycycle.co', 'rhonda@toycycle.co'],
      subject: `New Contact Form Submission: ${interestLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #010066;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Interest:</strong> ${interestLabel}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Toycycle B2B contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company}
${phone ? `- Phone: ${phone}` : ''}
- Interest: ${interestLabel}

Message:
${message}
      `,
    };

    // Send notification email to team
    await transporter.sendMail(mailOptions);

    // Send thank you email to the submitter
    const thankYouEmailOptions = {
      from: fromEmail,
      replyTo: fromAddress, // Set reply-to to the alias address
      to: email,
      subject: 'Thank You for Contacting Toycycle',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(180deg, #ffffff 0%, rgba(1, 0, 102, 0.08) 100%); border-radius: 8px 8px 0 0;">
                      <div style="margin-bottom: 20px;">
                        <h1 style="margin: 0; color: #010066; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Toycycle</h1>
                        <p style="margin: 8px 0 0; color: #666; font-size: 14px;">Inventory Recovery & Resale Infrastructure</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 40px 30px;">
                      <h2 style="margin: 0 0 20px; color: #010066; font-size: 24px; font-weight: 600;">Thank You for Reaching Out, ${name}!</h2>
                      
                      <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                        We've received your inquiry about <strong>${interestLabel}</strong> and appreciate you taking the time to contact us.
                      </p>
                      
                      <p style="margin: 0 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                        Our team is reviewing your message and will be in touch with you soon. We typically respond within 1-2 business days.
                      </p>
                      
                      <div style="background-color: rgba(1, 0, 102, 0.08); padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #010066;">
                        <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">
                          <strong>What happens next?</strong><br>
                          Our partnerships team will review your inquiry and reach out to discuss how we can help with your inventory recovery and resale needs.
                        </p>
                      </div>
                      
                      <p style="margin: 30px 0 20px; color: #333; font-size: 16px; line-height: 1.6;">
                        In the meantime, feel free to explore our solutions:
                      </p>
                      
                      <ul style="margin: 0 0 30px; padding-left: 20px; color: #333; font-size: 15px; line-height: 1.8;">
                        <li><strong>B-Stock Drop Ship</strong> - Sell excess inventory without warehousing overhead</li>
                        <li><strong>Returns Management</strong> - End-to-end handling of returned inventory</li>
                        <li><strong>Resale as a Service</strong> - Fully outsourced resale operations</li>
                      </ul>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; border-top: 1px solid #e0e0e0;">
                      <p style="margin: 0 0 10px; color: #666; font-size: 14px; line-height: 1.6;">
                        <strong>Questions?</strong> Reply to this email or contact us at <a href="mailto:partnerships@toycycle.co" style="color: #010066; text-decoration: none;">partnerships@toycycle.co</a>
                      </p>
                      <p style="margin: 20px 0 0; color: #999; font-size: 12px; line-height: 1.5;">
                        This is an automated confirmation email. Please do not reply directly to this message.
                      </p>
                    </td>
                  </tr>
                </table>
                
                <!-- Bottom Spacing -->
                <table role="presentation" style="width: 100%; max-width: 600px; margin-top: 20px;">
                  <tr>
                    <td style="text-align: center; padding: 20px;">
                      <p style="margin: 0; color: #999; font-size: 12px;">
                        © ${new Date().getFullYear()} Toycycle. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Thank You for Contacting Toycycle

Dear ${name},

We've received your inquiry about ${interestLabel} and appreciate you taking the time to contact us.

Our team is reviewing your message and will be in touch with you soon. We typically respond within 1-2 business days.

What happens next?
Our partnerships team will review your inquiry and reach out to discuss how we can help with your inventory recovery and resale needs.

In the meantime, feel free to explore our solutions:
- B-Stock Drop Ship - Sell excess inventory without warehousing overhead
- Returns Management - End-to-end handling of returned inventory
- Resale as a Service - Fully outsourced resale operations

Questions? Contact us at partnerships@toycycle.co

This is an automated confirmation email. Please do not reply directly to this message.

© ${new Date().getFullYear()} Toycycle. All rights reserved.
      `,
    };

    // Send thank you email to submitter
    await transporter.sendMail(thankYouEmailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
