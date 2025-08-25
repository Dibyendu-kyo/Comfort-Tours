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
    // Create form data for PHP handler
    const phpFormData = new FormData()
    phpFormData.append('name', name)
    phpFormData.append('email', email)
    phpFormData.append('phone', phone)
    phpFormData.append('service', service || 'Not specified')
    phpFormData.append('message', message)

    // Submit to PHP handler
    const response = await fetch('/contact-handler.php', {
      method: 'POST',
      body: phpFormData,
    })

    const result = await response.json()

    if (result.success) {
      return { 
        success: true, 
        message: 'Thank you for your message! We have received your inquiry and will get back to you within 2-4 business hours. For immediate assistance, please call +91-20-41230000.' 
      }
    } else {
      return { 
        success: false, 
        error: result.message || 'Failed to send message. Please try again.' 
      }
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return { 
      success: false, 
      error: 'Sorry, there was an error processing your message. Please try again or contact us directly at +91-20-41230000 or info@comfort-toursindia.com' 
    }
  }
}