<?php
ob_start();

$captcha=$_POST['g-recaptcha-response'];

if(isset($_POST['g-recaptcha-response'])) {
	$captcha=$_POST['g-recaptcha-response'];
}

if(!$captcha) {
	echo '<h2>Please check the the captcha form.</h2>';
	exit;
    header("Location:../index.php?s=2");
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phoneno'];
$query = $_POST['message'];

if(empty($errors)) {
	if(isset($_POST['submit'])) {
		if(!get_magic_quotes_gpc()) {
			$name = $_POST['name'];
			$email = $_POST['email'];
			$phone = $_POST['phoneno'];
			$query = $_POST['message'];
		}
	}
}

$to = "contact@cloudearl.com";
$emailsubject = "Query | $name | CloudEarl Solutions Pvt Ltd";
$message = "Dear Team,\n\nA user has been contacted with the below details, please respond the query ASAP.\n

	Name:       $name
	Email:      $email
	Phone:      $phone
	Message:    $query

\nThanks and Regards\nAdministrator\nCloudEarl Solutions Pvt Ltd";

$headers = "From: contact@cloudearl.com" . "\r\n" .
"CC: jansaida.ce@gmail.com";

if (isset($_POST['submit'])) {
	mail($to,$emailsubject,$message,$headers);
    header("Location:../index.php?s=1");
} else {
    header("Location:../index.php?s=2");
}

ob_end_flush();
?>