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
	<form action="index.php" method="post">
		<?php
			require_once("funkcje.php");
			if($_SESSION["zalogowany"] == 1){
				echo "Zalogowano","<br/>","Witaj, ",$_SESSION["zalogowanyImie"],"<br/>";
			}else{
				header("Location: index.php");
			}
		?><input type="submit" value="wyloguj" name="wyloguj"/>
	</form>
	<form action='user.php' method='POST' enctype='multipart/form-data'>
		<table>
		<tr>
			<td><input name="myfile" type="file"/></td>
			<td><input type="submit" value="Poslij" name="Poslij"/></td>
		</tr>
		</table>
	</form>
	
		<?php
		if(isSet($_POST['Poslij'])){
			$currentDir =getcwd();
			$uploadDirectory="\\zdjeciaUzytkownikow\\";
			$fileName=$_FILES['myfile']['name'];
			$fileSize=$_FILES['myfile']['size'];
			$fileTmpName=$_FILES['myfile']['tmp_name'];
			$fileType=$_FILES['myfile']['type'];
			if($fileName !="" and
				($fileType =='image/jpeg' or $fileType == 'image/png' or $fileType == 'image/JPEG' or $fileType=='image/PNG'
			)){
				$uploadPath = $currentDir . $uploadDirectory . $fileName;
				if(move_uploaded_file($fileTmpName,$uploadPath))
					echo "<img src=\"" . $uploadDirectory . $fileName . "\" alt=\"" . $fileName ."\"/>";
			}
		}
		?>
</body>
</html>