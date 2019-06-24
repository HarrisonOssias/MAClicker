$(function(){
    //The following buttons are to add and remove match rows
    function appendMatchCode(rowNum, matchId){
        var matchHTML = `<div class="form-group row" id="row`+ rowNum +`">
            <div class="col-1 text-right">`+ rowNum +`:</div>
            <div class="col-5">
                <input class="form-control" type="text" placeholder="Match this" name="match`+ matchId +`">
            </div>
            <div class="col-5">
                <input class="form-control" type="text" placeholder="To this" name="matched`+ matchId +`">
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