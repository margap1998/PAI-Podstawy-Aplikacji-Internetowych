<?php
	require('funkcje.php');
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
	<meta charset='UTF-8' />
</head>
<body>
	
	<h1><?php
		echo "NASZ SYSTEM";
	?></h1>
	<nav><table><tr>
		<td><a href="index.php"> Strona główna</a></td>
		<td><a href="user.php"> Strona użytkownika</a></td> 
	</tr></table></nav>
	<div id="shower">
	<?php
		if (isSet($_POST["zaloguj"])){
			echo "Nazwa użytkownika to:",$_POST["login"];
			echo "<br>","Jego hasło to:",$_POST["haslo"],"</br>";
		}
		if (isSet($_POST["wyloguj"])){
			$_SESSION["zalogowany"]=0;
			$_SESSION["zalogowanyImie"]="";
		}
	?>
	</div>
	<form name="formularz1" action="logowanie.php" method="post"><fieldset>
	<legend>Formularz logowania </legend>
	<p>
		<label for="login">Login:</label>
		<input type="text" name="login">
	</p>
	<p>
		<label for="haslo">Hasło:</label>
		<input type="password" name="haslo">
	</p>
	<p>
		<input name="zaloguj" type="submit" value="Zaloguj">
	</p>
	</fieldset></form>
	<form name="formularz2" action="cookie.php" method="get">
		<fieldset>
			<legend>Formularz do generowania ciasteczek</legend>
			<label for="czas">Czas: </label>
			<input type="number" name="czas">
			<br/>
			<input name="utworzCookie" type="submit" value="Poślij ciastko">
			<br/>
			<?php if (isset ($_COOKIE["Muffin"])) echo "Masz ciasteczko o wartości " . $_COOKIE["Muffin"]; ?>
		</fieldset>
	</form>
</body>
</html>