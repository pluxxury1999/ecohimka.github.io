<?php
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$more = $_POST['user_info'];
$token = "5505181335:AAGCJahoJpUykwzYWwDW64PJ5cEAxF5vHKA";
$chat_id = "-772054559";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Описание: ' => $more
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>