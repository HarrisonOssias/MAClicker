console.log('Hello World');
let name="Mo";
console.log(name);

const ourObj = {
    pName : name,
    pAge : 19
};

function showInfo(){
    infoContainer.innerHTML = "Name: " + ourObj.pName + "; Age: " + ourObj.pAge;
}

const infoContainer = document.getElementById("infoCont");
const formContainer = document.getElementById("formCont");


$(function() {

    $('#nameBtn').on('click', function(){
        
        $("#formContName").toggle();

    });

    $('#ageBtn').on('click', function(){
        
        $("#formContAge").hide();

    });

    const formContainer = document.getElementById("formCont");

    $('#addForm').on('click', function(){
        var html = '<input class="form-control" type="text" placeholder="Quiz Name eg.(1X03 Quiz 1)" id="quiz-name">'

        $("#testCont").append(html);
    });

    $('.test-btn').on('click', function(){
        var btnId = $(this).attr('data-btnId');

        $('#testInput'+btnId).toggle();
    });

    $('#toggleForm').on('click', function(){
        $('#formCont').toggle();
    });

    $('.test2-btn').on('click', function(){
        var btn2Id = $(this).attr('data-testBtnId');

        $('#test2Input'+btn2Id).toggle();
    });

    $('.add-btn').on('click', function(){
        var addBtnId = $(this).attr('data-addBtnId');

        newBtn = '<button type="button" class="btn btn-default add-btn" data-addBtnId="' + ++addBtnId + '">Make Another Button</button>';

        $('#addBtnContainer').append(newBtn);

        //window.location just refreshes the page
        //window.location = window.location;

        //this doesn't work to reload the js but its great for adding html code to the page since it just adds the whole html file to the container.
        //$('#addBtnContainer').load("learning_javascript.html")

        //let's try a .getScript method
        /*$.getScript('learning_javascript.js', function(){
            console.log("Script Loaded");
        });*/
    });

});
