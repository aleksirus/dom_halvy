<?php 
// читать json файл 
$json = file_get_contents('../goods.json');
$json = json_decode($json, true);

// письмо
$message = '';
$message .= '<h1>заказ в магазине</h1>';
$message .= '<p>телефон: '.$_POST['ephone'].'</p>';
$message .= '<p>почта: '.$_POST['email'].'</p>';
$message .= '<p>клиент: '.$_POST['ename'].'</p>'; 

$cart = $_POST['cart'];
$sum = 0;

foreach ($cart as $id => $count) {
     $message .= $json[$id] ['name'].'---';
     $message .= $count.'---';
     $message .= $count*$json[$id]['cost'];
     $message .='<br>';
     $sum = $sum +$count*$json[$id]['cost'];
}
$message .='всего:' .$sum;
// print_r($message);

$to = 'drum_alf@mail.ru'.',';
$to .= $_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>заказ</title></head><body>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'заказ в магазине', $spectext.$message.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}