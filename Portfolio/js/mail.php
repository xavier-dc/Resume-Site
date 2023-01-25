<?php

$name = $_POST['contactName'];
$email = $_POST['contactEmail'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "xdecardenas+website@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error");

echo"message sent";

?>