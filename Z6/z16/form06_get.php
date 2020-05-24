<?php session_start(); ?>
<?php
	$link=mysqli_connect("localhost","scott","tiger","instytut");
	
	if(!$link){
		printf("Connect failed:%s\n",mysqli_connect_error());
		exit();
	}
	
	if(isset($_SESSION["isgood"])){
		if ($_SESSION["isgood"]==1){
			print "<br>Pracownik pomyslnie dodany</br>";
			$_SESSION["isgood"]=0;
		}
	}
	$sql="SELECT * FROM pracownicy";
	$result=$link->query($sql);
	foreach($result as $v){echo $v["ID_PRAC"]." ".$v["NAZWISKO"]."<br/>";}
	print "\n <a href=\"form06_post.php\">Nowy pracownik</a>";
	$result->free();
	$link->close();
?>