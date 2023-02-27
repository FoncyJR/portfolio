<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Construct email
    $to = "email@email.com";
    $subject = "New message from your portfolio website";
    $body = "From: $name\nEmail: $email\nMessage: $message";

    // Set additional headers
    $headers = "From: Your Name <youremail@yourdomain.com>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "There was a problem sending your message. Please try again.";
    }
}
?>
