'use server'
import nodemailer from 'nodemailer';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || !email || !phone || !message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  // Phone validation
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
    return { success: false, error: 'Please enter a valid phone number.' }
  }

  try {
    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'raj.kolpe@comfort-toursindia.com',
        pass: process.env.EMAIL_PASS || 'your-app-password' // You need to set this in .env.local
      }
    });

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #e67817; margin: 0;">New Contact Form Submission</h1>
          <p style="color: #666; margin: 5px 0;">Comfort Tours Website</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #e67817;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #e67817;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Service:</td>
              <td style="padding: 8px 0; color: #333;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
              <td style="padding: 8px 0; color: #333;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 14px; margin: 0;">
            This email was sent from the Comfort Tours contact form.<br>
            Please respond to the customer within 24 hours.
          </p>
        </div>
      </div>
    `;

    // Send email to business owner
    await transporter.sendMail({
      from: `"Comfort Tours Website" <${process.env.EMAIL_USER || 'raj.kolpe@comfort-toursindia.com'}>`,
      to: 'raj.kolpe@comfort-toursindia.com',
      cc: 'bookings@comfort-toursindia.com',
      subject: `New Contact Form: ${service ? service.toUpperCase() : 'GENERAL'} - ${name}`,
      html: emailHtml,
      replyTo: email
    });

    // Send confirmation email to customer
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #e67817; margin: 0;">Thank You for Contacting Us!</h1>
          <p style="color: #666; margin: 5px 0;">Comfort Tours Pvt. Ltd.</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p style="color: #333; margin: 0; font-size: 16px;">Dear ${name},</p>
          <p style="color: #555; line-height: 1.6;">
            Thank you for reaching out to Comfort Tours! We have received your inquiry and our team will get back to you within 24 hours.
          </p>
          <p style="color: #555; line-height: 1.6;">
            In the meantime, feel free to call us at <strong>+91-20-41230000</strong> or <strong>+91-97637-04501</strong> for immediate assistance.
          </p>
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
          <p style="color: #555;"><strong>Service:</strong> ${service || 'General Inquiry'}</p>
          <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #888; font-size: 14px; margin: 0;">
            Best regards,<br>
            <strong>Comfort Tours Team</strong><br>
            Pune's Premier Travel Partner Since 2006
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Comfort Tours" <${process.env.EMAIL_USER || 'raj.kolpe@comfort-toursindia.com'}>`,
      to: email,
      subject: 'Thank you for contacting Comfort Tours - We will respond within 24 hours',
      html: confirmationHtml
    });

    return { 
      success: true, 
      message: 'Thank you for your message! We have sent you a confirmation email and will get back to you within 24 hours.' 
    }
  } catch (error) {
    console.error('Email sending error:', error)
    return { 
      success: false, 
      error: 'Sorry, there was an error sending your message. Please try again or contact us directly at raj.kolpe@comfort-toursindia.com' 
    }
  }
}