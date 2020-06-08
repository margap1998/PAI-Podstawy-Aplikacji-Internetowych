<?php require('funkcje.php'); session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
<?php 
	if($_POST["haslo"]==$osoba1->haslo && $_POST["login"]==$osoba1->login){
		$_SESSION["zalogowany"]=1;
		$_SESSION["zalogowanyImie"]=$osoba1->imieNazwisko;
		header("Location: user.php");
	}else if($_POST["haslo"]==$osoba2->haslo && $_POST["login"]==$osoba2->login){
		$_SESSION["zalogowany"]=1;
		$_SESSION["zalogowanyImie"]=$osoba2->imieNazwisko;
		header("Location: user.php");
	}else{
		$_SESSION["zalogowany"]=0;
		$_SESSION["zalogowanyImie"]="";
		header("Location: index.php");
	}
?>
</body>
</html>