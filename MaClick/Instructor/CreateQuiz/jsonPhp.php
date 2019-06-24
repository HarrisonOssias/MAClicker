<!DOCTYPE html>
<html>
	<head>
	
	</head>

	<body>
	<?php
	//Make sure that it is a POST request.
	if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
		throw new Exception('Request method must be POST!');
	}

	print_r($_POST);


	$data = var_dump($_POST);
	echo "\n\n";
	echo $data;
	echo "\n\n";



	//Make sure that the content type of the POST request has been set to application/json
	$contentType = isset($_SERVER['CONTENT_TYPE']) ? trim($_SERVER["CONTENT_TYPE"]) : '';
	if(strcasecmp($contentType, 'application/json') != 0){
		throw new Exception('Content type must be: application/json');
	}

	//Receive the RAW post data.
	$content = trim(file_get_contents("php://input"));
	echo $content;
	echo "\n\n";

	//Attempt to decode the incoming RAW post data from JSON.
	$decoded = json_decode($content);
	echo $decoded;
	echo "\n\n";

	//If json_decode failed, the JSON is invalid.
	if(!is_array($decoded))
	{
		throw new Exception('Received content contained invalid JSON!');
	}
	?>


	<!--<form action="/#">
		JSON Data:<input type="text" name="data" value=""><br>
	<input type="submit" value="Submit">
	</form>-->
</body>
</html>