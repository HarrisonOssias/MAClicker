<!DOCTYPE html>
<html>
    <head><title>Quiz Form PHP</title></head>

    <body>
    <?php

    echo "Start of Data: </br>";

    //document.writeln(questionNum);
    //$qInfoArray = $_GET["qInfoArray"];
    //echo($qInfoArray);


    //Quiz Name and Weight
    if(isset($_POST['quiz-name'])){
        $quizName = $_POST['quiz-name'];
    }
    echo "$quizName</br>";

    if(isset($_POST['quiz-weight'])){
        $quizWeight = $_POST['quiz-weight'];
    }
    echo "$quizWeight</br>";


    if(isset($_POST['question1'])){
        $question1 = $_POST['question1'];
    }
    echo "$question1</br>";

    if(isset($_POST['answer1'])){
        $answer1 = $_POST['answer1'];
    }
    echo "$answer1</br>";


    if(isset($_POST['question2'])){
        $question2 = $_POST['question2'];
    }
    echo "$question2</br>";

    if(isset($_POST['answer2'])){
        $answer2 = $_POST['answer2'];
    }
    echo "$answer2</br>";


    //QuizInfo
    //$qInfoArray = json_decode($_GET["x"], false);
    //$qInfoArray = file_get_contents('php://input');
    //$qInfoArray = json_decode($qInfoArray);
    //echo "$qInfoArray.qDataArray[1] </br>"

    /*$url = 'data.json';
    $data = file_get_contents($url);
    $quizArray = json_decode($data);
    echo $quizArray.dataArray;
    echo "$quizArray.dataArray[0]"; // + "</br>";
    echo $quizArray->dataArray[1];
    echo $quizArray->dataArray[2];
    echo $quizArray->dataArray[3];
    echo $quizArray->dataArray[4];*/

    /*if(isset($_POST['dataArray'])){
        $data = $_POST['dataArray'];
    }
	$echo "\n\n";
    $echo $data;*/
    
    //defining $_POST as a constant
    //define("postData", "$_POST");

    //$echo postData;

    /*print_r($_POST);

	$data = var_dump($_POST);
	echo "\n\n";
	echo $data;
	echo "\n\n";
    
    //Receive the RAW post data.
	$content = trim(file_get_contents("php://input"));
	echo $content;
	echo "\n\n";

	//Attempt to decode the incoming RAW post data from JSON.
	$decoded = json_decode($content, true);
	echo $decoded;
    echo "\n\n"*/
    
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
    
    
    //question form code was moved up from here


    /*if(isset($_POST['personName'])){
        $name = $_POST['personName'];
    }

    if(isset($_POST['personAge'])){
        $age = $_POST['personAge'];
    }
    
    $str = "Your name is ". $name. " and you're ". $age. " years old.";
    echo "$str </br>";*/

    ?>
    </body>
</html>