'use server'

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
    // Log the form submission for now (you can check server logs)
    const submissionData = {
      name,
      email,
      phone,
      service: service || 'Not specified',
      message,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      userAgent: 'Web Form Submission'
    }

    // Log to server console (you can check deployment logs)
    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Service:', service || 'Not specified')
    console.log('Message:', message)
    console.log('Submitted at:', submissionData.timestamp)
    console.log('=====================================')

    // You can also save to a database here if needed
    // await saveToDatabase(submissionData)

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { 
      success: true, 
      message: 'Thank you for your message! We have received your inquiry and will get back to you within 24 hours. For immediate assistance, please call +91-20-41230000.' 
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return { 
      success: false, 
      error: 'Sorry, there was an error processing your message. Please try again or contact us directly at +91-20-41230000 or raj.kolpe@comfort-toursindia.com' 
    }
  }
}