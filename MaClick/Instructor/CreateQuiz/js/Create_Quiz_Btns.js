$(function(){
    //The following functions are for the dynamic selection of the question type.
    function showMCQ(mcqId){
        $('#mcqCont'+mcqId).show();
        $('#tfCont'+mcqId).hide();
        $('#txtCont'+mcqId).hide();
        $('#numCont'+mcqId).hide();
        $('#matchCont'+mcqId).hide();
    }
    
    $('.mcqBtn').on('click', function(){
        var mcqId = $(this).attr('data-mcqId');
        console.log("MCQ for Q: " + mcqId);
        showMCQ(mcqId);
    });

    function showTF(tfId){
        $('#mcqCont'+tfId).hide();
        $('#tfCont'+tfId).show();
        $('#txtCont'+tfId).hide();
        $('#numCont'+tfId).hide();
        $('#matchCont'+tfId).hide();
    }

    $('.tfBtn').on('click', function(){
        var tfId = $(this).attr('data-tfId');
        console.log("TF for Q: " + tfId);
        showTF(tfId);
    });

    function showTxt(txtId){
        $('#mcqCont'+txtId).hide();
        $('#tfCont'+txtId).hide();
        $('#txtCont'+txtId).show();
        $('#numCont'+txtId).hide();
        $('#matchCont'+txtId).hide();
    }

    $('.txtBtn').on('click', function(){
        var txtId = $(this).attr('data-txtId');
        console.log("TXT for Q: " + txtId);
        showTxt(txtId);
    });

    function showNum(numId){
        $('#mcqCont'+numId).hide();
        $('#tfCont'+numId).hide();
        $('#txtCont'+numId).hide();
        $('#numCont'+numId).show();
        $('#matchCont'+numId).hide();
    }

    $('.numBtn').on('click', function(){
        var numId = $(this).attr('data-numId');
        console.log("NUM for Q: " + numId);
        showNum(numId);
    });

    function showMatch(matchId){
        $('#mcqCont'+matchId).hide();
        $('#tfCont'+matchId).hide();
        $('#txtCont'+matchId).hide();
        $('#numCont'+matchId).hide();
        $('#matchCont'+matchId).show();
    }

    $('.matchBtn').on('click', function(){
        var matchId = $(this).attr('data-matchId');
        console.log("MATCH for Q: " + matchId);
        showMatch(matchId);
    });


    //This button is for testing and debugging purposes only
    $('.test2-btn').on('click', function(){
        $('#matchCont2').show();
    });


    //The following buttons are to add and remove match rows
    function appendMatchCode(rowNum, matchId){
        var matchHTML = `<div class="form-group row" id="row`+ rowNum +`">
            <div class="col-1"></div>
            <div class="col-1 text-right">` + rowNum + `:</div>
            <div class="col-5">
                <input class="form-control" type="text" placeholder="Match this" id="match`+ matchId +`">
            </div>
            <div class="col-5">
                <input class="form-control" type="text" placeholder="To this" id="matched`+ matchId +`">
            </div>
        </div>`;

        $('#matchColumns'+matchId).append(matchHTML);
    }
    
    $('.addRowBtn').on('click', function(){
        var matchId = $(this).attr('data-matchBtnId');
        rowNumArray[matchId]++;
        var rowNum = rowNumArray[matchId];

        console.log("Match Row #"+rowNum);
        console.log(rowNum);
        console.log(rowNumArray);

        appendMatchCode(rowNum, matchId);
    });

    $('.rmvRowBtn').on('click', function(){
        var matchId = $(this).attr('data-matchBtnId');
        var rowNum = rowNumArray[matchId];
        
        if(rowNum>1){
            $('#matchColumns'+matchId+'> #row'+rowNum).remove();
            rowNumArray[matchId]--;
            console.log(rowNumArray);
        }
        else{
            alert("You need to have at least one match item!");
        }
    });

});