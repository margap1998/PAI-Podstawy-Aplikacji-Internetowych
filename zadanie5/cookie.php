<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
<p>
<?php require_once("funkcje.php");
	if (isset($_GET["utworzCookie"])){
		setcookie("Muffin", "abc", time() + $_GET["czas"],"/");
	}
?>
</p>
<p>
	<a href="index.php">Wstecz</>
</p>
</body>
</html>