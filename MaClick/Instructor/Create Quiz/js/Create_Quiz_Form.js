$(function(){
    
    //The following functions are for the dynamic addition and subtraction of questions.
    var questionNum = 1;
    //window.questionNum = 1;
    window.rowNumArray = [null, 1];
    window.qTypeArray = [null, null];//index 0 will store the number of quesions and the other indexes store the types of each question
    window.location.href="Create_Quiz_Form.php?qInfoArray=qTypeArray";

    function reloadScript(){
        /*var head= document.getElementsByTagName('head')[0];
        var script= document.createElement('script');
        script.src= 'Create_Quiz_Form.js';
        head.appendChild(script);*/
        //$('script[src="Create_Quiz_Form.js"]').remove();
        //$('<script>').attr('src', 'Create_Quiz_Form.js').appendTo('body');
        //'<script src="Create_Quiz_Form.js" id="script"></script>'

        $('#scriptBtn').remove();
        var script = document.createElement('script');
        script.src = 'js/Create_Quiz_Btns.js';
        script.id = 'scriptBtn';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
    }

    function appendQCode(){

        var qTitle = '<div class="container" style="padding-top:10px"><h5>Question ' + questionNum + ':</h5><br></div>';

        var qTimeLimit = `<div class="form-group row">
            <label class="col-2 col-form-label text-center">Time Limit</label>
            <div class="col-3">
                <input class="form-control" type="number" placeholder="Allowed time (seconds)" name="timeLimit` + questionNum + `">
            </div>
        </div>`

        var qDromdown = `<div class="container" style="padding-bottom:20px">
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                    Question Type
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><button class=" btn btn-default mcqBtn btn-block" type="button" data-mcqId="` + questionNum + `">Multiple Choice</button></li>
                    <li><button class=" btn btn-default tfBtn btn-block" type="button" data-tfId="` + questionNum + `">True/False</button></li>
                    <li><button class=" btn btn-default txtBtn btn-block" type="button" data-txtId="` + questionNum + `">Text Answer</button></li>
                    <li><button class=" btn btn-default numBtn btn-block" type="button" data-numId="` + questionNum + `">Numerical Answer</button></li>
                    <li><button class=" btn btn-default matchBtn btn-block" type="button" data-matchId="` + questionNum + `">Column Match</button></li>
                </ul>
            </div>
        </div>`;

        var qTypeCont = '<div class="container" id="typeCont' + questionNum + '"></div>';

        var qXCont = '<div class="container" id="question' + questionNum + 'Container" style="border:1px solid #cecece;">' + qTitle + qTimeLimit + qDromdown + qTypeCont + '</div>';

        $('#questionsCont').append(qXCont);
        
        //qXCont = '';
        //console.log(qXCont);
    }
    
    $('#addQBtn').on('click', function(){
        questionNum++;
        rowNumArray.push(1);
        qTypeArray.push(null);
        console.log(rowNumArray);
        console.log(qTypeArray);
        
        appendQCode();
        reloadScript();
    });

    $('#rmvQBtn').on('click', function(){
        if(questionNum>1){
            $('#question' + questionNum + 'Container').remove();
            questionNum--;
            rowNumArray.pop();
            qTypeArray.pop();
            console.log(rowNumArray);
            console.log(qTypeArray);
        }
        else{
            alert("You need to have at least one question!");
        }
    });

});