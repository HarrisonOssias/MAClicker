lim = 30
count = 0
$(function () {
        $("#addG").on("click", function () {
            count++;
            var nameForm = '<input id=in'+count+' type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Group Name"></input>'
            , spacer = '<br id=sp' + count + '>'
            , breaking = '<br id=break' + count + '>'
            , div1 = '<div>', div2 = '</div>'
            , size = '<input id=size'+count+' type="number" class="form-control " placeholder="Size">';

            var full = spacer + '<form class="form-inline">' + nameForm + size +  '</form>';
            
            $('#addGroup').append(div1, full, div2);
            if (count == lim) {
                alert("Limit of 30 groups met");
            }
            

        });    

        $("#takeG").on("click", function () {
            $('#in' + count).remove();
            $('#name' + count).remove();
            $('#break' + count).remove();
            $('#sp' + count).remove();
            $('#size' + count).remove();
            count --;
        });

    });
    
