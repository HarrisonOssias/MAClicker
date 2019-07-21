$(function(){
    //The following function is to reload the buttons that dynamically add and remove rows for the match questions.
    function reloadMatchScript(){
        $('#scriptMatchBtn').remove();
        var matchScript = document.createElement('script');
        matchScript.src = 'js/matchBtns.js';
        matchScript.id = 'scriptMatchBtn';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(matchScript);
    }

    //The following functions are for the dynamic selection of the question type.
    $('.mcqBtn').on('click', function(){
        var mcqId = $(this).attr('data-mcqId');
        $('#typeCont'+mcqId).empty();

        var qMCQ = `<input type="hidden" name="questionType" value="mcq">
        <div class="container" id="mcqCont` + mcqId + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <!--<input class="form-control" type="text" name="question` + mcqId + `">-->
                    <textarea rows="4" cols="100"></textarea>
                </div>
            </div>

            <div class="form-group row" style="padding-top:10px; padding-bottom:10px">
                <label class="col-1 col-form-label">A</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer A" name="question` + mcqId + `A">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="" name="answer` + mcqId + `A">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">B</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer B" name="question` + mcqId + `B">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="" name="answer` + mcqId + `B">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">C</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer C" name="question` + mcqId + `C">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="" name="answer` + mcqId + `C">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">D</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer D" name="question` + mcqId + `D">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="" name="answer` + mcqId + `D">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">E</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer E" name="question` + mcqId + `E">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="" name="answer` + mcqId + `E">Correct</label>
            </div>
        </div>`;

        console.log("MCQ for Q: " + mcqId);
        qDataArray[mcqId] = 'mcq';
        console.log(qDataArray);
        $('#typeCont'+mcqId).append(qMCQ);
    });

    $('.tfBtn').on('click', function(){
        var tfId = $(this).attr('data-tfId');
        $('#typeCont'+tfId).empty();

        var qTF = `<input type="hidden" name="questionType" value="tf">
        <div class="container" id="tfCont` + tfId + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="True/False Statement" name="question` + tfId + `">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-1 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="text" max-length="1" name="question_ans" placeholder="T or F" pattern="[TFtf]" title="Enter T or t for True. Enter F or f for False."/>
                </div>
            </div>
        </div>`;

        console.log("TF for Q: " + tfId);
        qDataArray[tfId] = 'tf';
        console.log(qDataArray);
        $('#typeCont'+tfId).append(qTF);
    });

    $('.txtBtn').on('click', function(){
        var txtId = $(this).attr('data-txtId');
        $('#typeCont'+txtId).empty();

        var qTxt = `<input type="hidden" name="questionType" value="txt">
        <div class="container" id="txtCont` + txtId + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="question` + txtId + `">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-1 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="answer` + txtId + `">
                </div>
            </div>
        </div>`;

        console.log("TXT for Q: " + txtId);
        qDataArray[txtId] = 'txt';
        console.log(qDataArray);
        $('#typeCont'+txtId).append(qTxt);
    });

    $('.numBtn').on('click', function(){
        var numId = $(this).attr('data-numId');
        $('#typeCont'+numId).empty();

        var qNum = `<input type="hidden" name="questionType" value="num">
        <div class="container" id="numCont` + numId + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="question` + numId + `">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-1 col-form-label">Answer</label>
                <div class="col-10">
                    <input class="form-control" type="number" placeholder="Numerical Answer" name="answer` + numId + `">
                </div>
            </div>
        </div>`;

        console.log("NUM for Q: " + numId);
        qDataArray[numId] = 'num';
        console.log(qDataArray);
        $('#typeCont'+numId).append(qNum);
    });

    $('.matchBtn').on('click', function(){
        var matchId = $(this).attr('data-matchId');
        $('#typeCont'+matchId).empty();

        var qMatch = `<input type="hidden" name="questionType" value="match">
        <div class="container" id="matchCont` + matchId + `">
            <div class="contianer" id="matchColumns` + matchId + `">
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
                    <button type="button" class="btn btn-danger rmvRowBtn" data-matchBtnId="` + matchId + `">Remove Row</button>
                    <button type="button" class="btn btn-success addRowBtn" data-matchBtnId="` + matchId + `">Add Row</button>
                </div>
            </div>
        </div>`;

        console.log("MATCH for Q: " + matchId);
        qDataArray[matchId] = 'match';
        console.log(qDataArray);
        $('#typeCont'+matchId).append(qMatch);
        reloadMatchScript();
    });

});