<?php
//if "email" variable is filled out, send email
  if (isset($_POST['send']))  {
  
  //Email information
  //$admin_email = "kruthikanj@live.in";
  $admin_email = "contact@purpletux.in";
  $email = $_POST['email'];
  $name = $_POST['name'];
  $contact = $_POST['contact'];
  $message = $_POST['message'];
 
   
  //send email
  mail($admin_email, "Message from purpletux.in", $message, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
?>