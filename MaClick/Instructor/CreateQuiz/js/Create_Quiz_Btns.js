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

        var qMCQ = `<div class="container" id="mcqCont` + mcqId + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" name="question` + mcqId + `">
                </div>
            </div>

            <div class="form-group row" style="padding-top:10px; padding-bottom:10px">
                <label class="col-1 col-form-label">A</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer A" name="question` + mcqId + `A">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">B</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer B" name="question` + mcqId + `B">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">C</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer C" name="question` + mcqId + `C">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">D</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer D" name="question` + mcqId + `D">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>

            <div class="form-group row" style="padding-bottom:10px">
                <label class="col-1 col-form-label">E</label>
                <div class="col-9">
                    <input class="form-control" type="text" placeholder="Answer E" name="question` + mcqId + `E">
                </div>
                <label class="checkbox-inline col-2"><input type="checkbox" value="">Correct</label>
            </div>
        </div>`;

        console.log("MCQ for Q: " + mcqId);
        qTypeArray[mcqId] = 'mcq';
        console.log(qTypeArray);
        $('#typeCont'+mcqId).append(qMCQ);
    });

    $('.tfBtn').on('click', function(){
        var tfId = $(this).attr('data-tfId');
        $('#typeCont'+tfId).empty();

        var qTF = `<div class="container" id="tfCont` + tfId + `">
            <div class="form-group row">
                <label class="col-1 col-form-label">Question</label>
                <div class="col-10">
                    <input class="form-control" type="text" placeholder="True/False Statement" name="question` + tfId + `">
                </div>
            </div>
            <div class="row">
                <div class="col-1"></div>
                <div class="radio col-2" style="padding-bottom:10px">
                    <label><input type="radio" name="optradio` + tfId + `">True</label>
                </div>

                <div class="radio col-2" style="padding-bottom:10px">
                    <label><input type="radio" name="optradio` + tfId + `">False</label>
                </div>
            </div>
        </div>`;

        console.log("TF for Q: " + tfId);
        qTypeArray[tfId] = 'tf';
        console.log(qTypeArray);
        $('#typeCont'+tfId).append(qTF);
    });

    $('.txtBtn').on('click', function(){
        var txtId = $(this).attr('data-txtId');
        $('#typeCont'+txtId).empty();

        var qTxt = `<div class="container" id="txtCont` + txtId + `">
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
        qTypeArray[txtId] = 'txt';
        console.log(qTypeArray);
        $('#typeCont'+txtId).append(qTxt);
    });

    $('.numBtn').on('click', function(){
        var numId = $(this).attr('data-numId');
        $('#typeCont'+numId).empty();

        var qNum = `<div class="container" id="numCont` + numId + `">
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
        qTypeArray[numId] = 'num';
        console.log(qTypeArray);
        $('#typeCont'+numId).append(qNum);
    });

    $('.matchBtn').on('click', function(){
        var matchId = $(this).attr('data-matchId');
        $('#typeCont'+matchId).empty();

        var qMatch = `<div class="container" id="matchCont` + matchId + `">
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
        qTypeArray[matchId] = 'match';
        console.log(qTypeArray);
        $('#typeCont'+matchId).append(qMatch);
        reloadMatchScript();
    });

});