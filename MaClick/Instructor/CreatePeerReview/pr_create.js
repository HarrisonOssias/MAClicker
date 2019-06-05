lim = 30;
count = 0;
dncount = 0;
$(function () {
        $("#addG").on("click", function () {
            count++;
            var nameForm = '<input id=in' + count + ' type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Group Name">'
                , spacer = '<br id=sp' + count + '>'
                , div1 = '<div>', div2 = '</div>'
                , size = '<input id=size' + count + ' type="number" class="form-control " placeholder="Size">'
                , entbutt = '<input id=conf' + count + ' type="button" class="button confirmbutton btn-success" value="Enter">';
    
            var full = spacer + '<form class="form-inline">' + nameForm + size + entbutt + '<div id=membdiv' + count + '></div>' + '</form>';
    
            
            $('#addGroup').append(div1, full, div2);
            if (count == lim) {
                alert("Limit of 30 groups met");
            }
            $("#conf" + count).on("click", function () {
                dncount++;
                var x = document.getElementById("size" + count).value;
                for (i = 0; i < x; i++) {
                    var memb = '<input type="number" class="form-control " placeholder="Member"' + i + 1 + '>';
                    $('#membdiv' + count).append(memb);
                }
                
            });
            console.log(dncount);
    
        });
    
       // alert("Confirm group and include members before adding another group")
    


    $("#takeG").on("click", function () {
        $('#in' + count).remove();
        $('#name' + count).remove();
        $('#break' + count).remove();
        $('#sp' + count).remove();
        $('#size' + count).remove();
        $('#conf' + count).remove();
        $('#membdiv' + count).remove();
        count--;
    });

    $("#continue").on("click", function() {
        if (dncount==count)
            window.location.href="pr_done.html";
    });
});