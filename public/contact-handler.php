<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for CORS and JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get form data from POST
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$service = isset($_POST['service']) ? trim($_POST['service']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Basic validation
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, phone, and message are required']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email format']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$service = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration
$admin_email = 'info@comfort-toursindia.com';
$subject = 'New Contact Form Submission - Comfort Tours';

// Build email body
$email_body = "
New contact form submission received from Comfort Tours website:

Name: {$name}
Email: {$email}
Phone: {$phone}
Service Required: {$service}
Message: {$message}

Submitted on: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = array(
    'From: info@comfort-toursindia.com',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
);

// Send email to admin
$admin_sent = mail($admin_email, $subject, $email_body, implode("\r\n", $headers));

// Send auto-reply to customer
$auto_reply_subject = 'Thank you for contacting Comfort Tours';
$auto_reply_body = "
Dear {$name},

Thank you for contacting Comfort Tours. We have received your inquiry and our team will get back to you within 2-4 business hours.

We will review your travel requirements and contact you soon to discuss how we can provide the best transportation solution for your needs.

Office Address:
Office No. 1, 2nd Floor, Rucha Building
Sr. No. 4/12, 4/13, 4/14, Punavale
Pune - 411033, Maharashtra

Contact Information:
Phone: +91-20-41230000 | +91-97637-04501
Email: info@comfort-toursindia.com

Best regards,
Comfort Tours Team
";

$auto_reply_headers = array(
    'From: info@comfort-toursindia.com',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion()
);

$auto_reply_sent = mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));

// Log the submission
$log_entry = date('Y-m-d H:i:s') . " - {$name} ({$email}) - {$service}\n";
file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);

// Return response
if ($admin_sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please try again later.']);
}
?>