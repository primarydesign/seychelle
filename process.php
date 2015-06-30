<?php

$notify_ms = <<<EOD
	<div class="notify n-ms">
		<p>Thank you! Someone will be in contact with you soon.</p>
	</div>
EOD;
$notify_mf = <<<EOD
	<div class="notify n-mf">
		<p>Sorry, your message failed to send. Please try submitting again.</p>
	</div>
EOD;
$notify_ff = <<<EOD
	<div class="notify n-ff">
		<p>Sorry, some of your input was invalid. Please try submitting again.</p>
	</div>
EOD;

if (!isset($_POST['submit'])) {
/* no submission data */
	
	include 'index.html.php';
	
} else { //Process Submission	
/* submission data detected */
	
	//Load Submission Input
	$fname = $_POST['first_name'];
	$lname = $_POST['last_name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$messg = $_POST['message'];
	
	$clearance = 0;
	
	//Validate Requireds
	$reqs = [$fname,$lname,$email,$phone];
	foreach( $reqs as $r ) {
		$clearance += (required($r)) ? 0 : 1;}
	//Validate Email
	$clearance += (email($email)) ? 0 : 1;
	//Validate Phone
	$clearance += (phone($phone)) ? 0 : 1;
	
	//Check Validation
	if ($clearance !== 0) {
	/* submission invalidation */
		
		$form_failure = true;
		include 'index.html.php';
		
	} else {
	/* submission clear */	
		
		//Load mailer Data
		$to = "mitchell@primarydesign.com";
		$subject = "User Message from Seychell Penthouse";
		$from = "From:" . $email;
		$message = $fname . " " . $lname;
		$message .= "\n" . $email;
		$message .= "\n" . $phone;
		$message .= "\n" . $messg;
		
		//Initialize Mailer		
		if (mail($to, $subject, $message, $from)) {
			
			$mail_success = true;
			include 'index.html.php';
			
		} else {
			
			$mail_failure = true;
			include 'index.html.php';
			
		}
		
	}
}
//GENERAL GLOBAL DECLARATIONS
function required($x) {
	if ($x !== "") return true;
	else return false;
}
function email($x) {
	$rgx = '/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+([.][a-zA-Z]+)+$/';
	$val = preg_match($rgx,$x);
	return ($val === 1) ? true : false;
}
function phone($x) {
	$rgx = '/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/';
	$val = preg_match($rgx,$x);
	return ($val === 1) ? true : false;
}

?>