<!DOCTYPE html>
<html>
    <head><title>Quiz Form PHP</title></head>

    <body>
    <?php

    echo "Start of Data: </br>";

    //document.writeln(questionNum);

    if(isset($_POST['personName'])){
        $name = $_POST['personName'];
    }

    if(isset($_POST['personAge'])){
        $age = $_POST['personAge'];
    }
    
    $str = "Your name is ". $name. " and you're ". $age. " years old.";
    echo "$str </br>";

    ?>
    </body>
</html>