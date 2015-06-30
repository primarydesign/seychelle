<?php

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
			echo "success";
		} else {
			echo "failure";
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