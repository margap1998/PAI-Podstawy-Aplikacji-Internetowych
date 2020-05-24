<?php session_start(); ?>
<?php
	$_SESSION["isgood"] = -2;
	$link=mysqli_connect("localhost","scott","tiger","instytut");
	
	if(!$link){
		printf("Connect failed:%s\n",mysqli_connect_error());
		exit();
	}
	if(isset($_POST['id_prac']) && is_numeric($_POST['id_prac']) && is_string($_POST['nazwisko'])){
		$_SESSION["isgood"] = 1;
		$sql="INSERT INTO pracownicy(id_prac,nazwisko)VALUES(?,?)";
		$stmt=$link->prepare($sql);
		$stmt->bind_param("is",$_POST['id_prac'],$_POST['nazwisko']);
		$result=$stmt->execute();
		if(!$result){
			$_SESSION["isgood"] = -1;
			$_SESSION["error"]=mysqli_error($link);
		}
		$stmt->close();
		$link->close();
	}
	if ($_SESSION["isgood"]==1)
		header("Location: form06_get.php");
	else
		header("Location: form06_post.php");
	$link->close();
?>