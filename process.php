<?php

//FORM INPUTS
$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$messg = $_POST['message'];

//REGULAR EXPRESSIONS
$regex = [
	'email' => '/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+([.][a-zA-Z]+)+$/',
	'phone' => '/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/'
];

$to = "mitchell@primarydesign.com";
$subject = "User Message from Seychell Penthouse";
$from = "From:" . $email;

$message = $fname . " " . $lname;
$message .= "\n" . $email;
$message .= "\n" . $phone;
$message .= "\n" . $messg;

mail($to, $subject, $message);

?>