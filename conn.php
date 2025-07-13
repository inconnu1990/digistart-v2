<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = new mysqli("localhost", "root", "", "hercule");
    if ($db->connect_error) die("Connection failed: " . $db->connect_error);

    $firstName = $db->real_escape_string($_POST['firstName'] ?? '');
    $lastName = $db->real_escape_string($_POST['lastName'] ?? '');
    $email = $db->real_escape_string($_POST['email'] ?? '');
    $phone = $db->real_escape_string($_POST['phone'] ?? '');
    $gender = $db->real_escape_string($_POST['gender'] ?? '');
    $serviceType = $db->real_escape_string($_POST['serviceType'] ?? '');
    $message = $db->real_escape_string($_POST['message'] ?? '');

    $sql = "INSERT INTO registration (first_name, last_name, email, phone, gender, service_type, message) 
            VALUES ('$firstName', '$lastName', '$email', '$phone', '$gender', '$serviceType', '$message')";
    
    if ($db->query($sql)) {
        echo "<p style='color: green;'>Data saved successfully!</p>";
    } else {
        echo "<p style='color: red;'>Error: " . $db->error . "</p>";
    }
}
?>