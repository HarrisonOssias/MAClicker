$(function(){
    
    //The following functions are for the dynamic addition and subtraction of questions.
    //var questionNum = 1;
    window.questionNum = 1;
    window.rowNumArray = [null, 1];
    window.qTypeArray = [null, null];
    //window.location.href=

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
        script.src = 'js/AddQuestionBtns.js';
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

        var qTimeLimit2 = `<div class="form-group row">
            <label class="col-2 col-form-label">Time Limit</label>
            <div class="col-10">
                <input class="form-control" type="number" placeholder="Allowed time (seconds)" id="timeLimit` + questionNum + `">
            </div>
        </div>`;

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

        var qMCQ = `<div class="container collapse" id="mcqCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="question` + questionNum + `">
                </div>
            </div>

            <div class="form-group row" style="padding-top:10px; padding-bottom:10px">
                <label class="col-1 col-form-label">A</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer A" name="question` + questionNum + `A">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">B</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer B" name="question` + questionNum + `B">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">C</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer C" name="question` + questionNum + `C">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">D</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer D" name="question` + questionNum + `D">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">E</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer E" name="question` + questionNum + `E">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>
        </div>`;

        var qMCQ2 = `<div class="container collapse" id="mcqCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-2 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" id="question` + questionNum + `">
                </div>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-2 col-form-label">A</label>
                <label class="checkbox-inline"><input type="checkbox" value="">Correct</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Answer A" id="question` + questionNum + `A">
                </div>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-2 col-form-label">B</label>
                <label class="checkbox-inline"><input type="checkbox" value="">Correct</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Answer B" id="question` + questionNum + `B">
                </div>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-2 col-form-label">C</label>
                <label class="checkbox-inline"><input type="checkbox" value="">Correct</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Answer C" id="question` + questionNum + `C">
                </div>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-2 col-form-label">D</label>
                <label class="checkbox-inline"><input type="checkbox" value="">Correct</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Answer D" id="question` + questionNum + `D">
                </div>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-2 col-form-label">E</label>
                <label class="checkbox-inline"><input type="checkbox" value="">Correct</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="Answer E" id="question` + questionNum + `E">
                </div>
            </div>
        </div>`;

        var qTF = `<div class="container collapse" id="tfCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="True/False Statement" name="question` + questionNum + `">
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="radio col-2" style="padding-bottom:10px">
                    <label><input type="radio" name="optradio` + questionNum + `">True</label>
                </div>

                <div class="radio col-2" style="padding-bottom:10px">
                    <label><input type="radio" name="optradio` + questionNum + `">False</label>
                </div>
            </div>
        </div>`;

        var qTF2 = `<div class="container collapse" id="tfCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-2 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="True/False Statement" id="question` + questionNum + `">
                </div>
            </div>

            <div class="radio">
                <label><input type="radio" name="optradio">True</label>
            </div>

            <div class="radio">
                <label><input type="radio" name="optradio">False</label>
            </div>
        </div>`;

        var qTxt = `<div class="container collapse" id="txtCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="question` + questionNum + `">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-1 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="answer` + questionNum + `">
                </div>
            </div>
        </div>`;

        var qTxt2 = `<div class="container collapse" id="txtCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-2 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" id="question` + questionNum + `">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-2 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="text" id="answer` + questionNum + `">
                </div>
            </div>
        </div>`;

        var qNum = `<div class="container collapse" id="numCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="question` + questionNum + `">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-1 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="number" placeholder="Numerical Answer" name="answer` + questionNum + `">
                </div>
            </div>
        </div>`;

        var qNum2 = `<div class="container collapse" id="numCont` + questionNum + `">
            <div class="form-group row">
                <label class="col-2 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" id="question` + questionNum + `">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-2 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="number" placeholder="Numerical Answer" id="answer` + questionNum + `">
                </div>
            </div>
        </div>`;

        var qMatch = `<div class="container collapse" id="matchCont` + questionNum + `">
            <div class="contianer" id="matchColumns` + questionNum + `">
                <div class="form-group row" id="row1">
                    <div class="col-1 text-right">1:</div>
                    <div class="col-5">
                        <input class="form-control" type="text" placeholder="Match this" name="match1">
                    </div>
                    <div class="col-5">
                        <input class="form-control" type="text" placeholder="To this" name="matched1">
                    </div>
                </div>
            </div>
            <div class="text-center" style="padding-bottom:10px; padding-top:10px">
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-danger rmvRowBtn" data-matchBtnId="` + questionNum + `">Remove Row</button>
                    <button type="button" class="btn btn-success addRowBtn" data-matchBtnId="` + questionNum + `">Add Row</button>
                </div>
            </div>
        </div>`;

        var qMatch2 = `<div class="container collapse" id="matchCont` + questionNum + `">
            <div class="contianer" id="matchColumns` + questionNum + `">
                <div class="form-group row" id="row1">
                    <div class="col-1"></div>
                    <div class="col-1 text-right">1:</div>
                    <div class="col-5">
                        <input class="form-control" type="text" placeholder="Match this" id="match1">
                    </div>
                    <div class="col-5">
                        <input class="form-control" type="text" placeholder="To this" id="matched1">
                    </div>
                </div>
            </div>
            <div class="text-center" style="padding-bottom:10px; padding-top:10px">
                <div class="btn-group" role="group" data-rowNum="1">
                    <button type="button" class="btn btn-danger rmvRowBtn" data-matchBtnId="` + questionNum + `">Remove Row</button>
                    <button type="button" class="btn btn-success addRowBtn" data-matchBtnId="` + questionNum + `">Add Row</button>
                </div>
            </div>
        </div>`;

        var qXCont = '<div class="container" id="question' + questionNum + 'Container" style="border:1px solid #cecece;">' + qTitle + qTimeLimit + qDromdown + qMCQ + qTF + qTxt + qNum + qMatch + '</div>';

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


    /*const mcqBtnArray = document.getElementsByClassName("mcqBtn");

    for(var i=0; i<mcqBtnArray.length; i++){
        mcqBtnArray[i].addEventListener("click", showMCQ);
    }*/

    //Don't remember why I wrote this code but I don't think I need it
    /*<script src="Create_Quiz_Form.js">const mcqBtnArray = document.getElementsByClassName("mcqBtn");
        for(var i=0; i<mcqBtnArray.length; i++){
            mcqBtnArray[i].addEventListener("click", showMCQ);
            console.log("hello");
        }</script>*/

});