<?php

	include('../app/config.php');
	
	// User Inputs
	$romance = $_POST['romance'];
	$adventure = $_POST['adventure'];
	$weather = $_POST['weather'];
	$budget = $_POST['budget'];
	$metropolis = $_POST['metropolis'];
	$historical = $_POST['historical'];
	$population = $_POST['population'];
	
	$match = array();
	$allmatches = array();

	$matching = mysqli_query($con, "select code, name, coordinates from places Where romance='$romance' AND adventure='$adventure' AND weather='$weather' AND budget='$budget' AND metropolis='$metropolis' AND historical='$historical' AND $population='$population' ");
	$allmatching = mysqli_query($con, "select * from places ORDER BY name asc");

	  while (($row = mysqli_fetch_array($matching))) {
		  $match[] = $row;
	  }

	  while (($allrow = mysqli_fetch_array($allmatching))) {
	  	$allmatches[] = $allrow;
	  }