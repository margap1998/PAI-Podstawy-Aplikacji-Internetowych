<?php session_start(); ?>
<?php
	print "
	<html>
		<head>
			<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>
		</head>
		<body>";
	if(isset($_SESSION["isgood"])){
		if ($_SESSION["isgood"]==-1){
			printf("Query failed:%s\n",$_SESSION["error"]);
			$_SESSION["isgood"]=0;
		}
		if ($_SESSION["isgood"]==-2){
			printf("ID should be a number");
			$_SESSION["isgood"]=0;
		}
	}
	print<<<KONIEC
			<form action="form06_redirect.php" method="POST">
				id_prac <input type="text" name="id_prac">
				nazwisko <input type="text" name="nazwisko">
				<input type="submit" value="Wstaw">
				<input type="reset" value="Wyczysc">
			</form>
			<a href="form06_get.php">Wszyscy pracownicy aktualnie</a>
		</body>
	</html>
	KONIEC;
?>