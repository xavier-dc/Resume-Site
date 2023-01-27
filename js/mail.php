<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './vendor/autoload.php';

$senderName = $_POST['contactName'];
$sender = $_POST['contactEmail'];
$message = $_POST['message'];

$recipient = 'xdecardenas@gmail.com';

$usernameSmtp = 'AKIA6KDWYYSZWX6PFUUM';
$passwordSmtp = 'BLB0Fm6YOLKMT7bX5EKxvpQ3dZ2+YFOrIXR1vLvE/qx8';

$host = 'email-smtp.us-east-1.amazonaws.com';
$port = 587;

$subject = 'SW Portfolio Reach Out!';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->setFrom($sender, $senderName);
    $mail->Username = $usernameSmtp;
    $mail->Password = $passwordSmtp;
    $mail->Host = $host;
    $mail->Port = $port;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';

    $mail->addAddress($recipient);
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mail->AltBody = '...';
    $mail->Send();

    echo "Email sent!", PHP_EOL;
} catch (phpmailerException $e) {
    echo "An error occured. {$e->errorMessage()}", PHP_EOL;
}

// $senderName = $_POST['contactName'];
// $sender = $_POST['contactEmail'];
// $message = $_POST['message'];

// $mailheader = "From:".$senderName."<".$senderName.">\r\n";

// $recipient = "xdecardenas@gmail.com";

// if (mail($recipient, $subject, $message, $mailheader)){
//     echo 'Your email has been sent!';
// } else {
//     echo 'Oops! Unable to send mail, please try again.';
// }

?>