lim = 30;
count = 0;
dncount = 0;
$(function () {
    $("#addC").on("click", function () {
            count++;
            var criteria = '<input id=in' + count + ' type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Group Name">'
                , spacer = '<br id=sp' + count + '>'
                , div1 = '<div>', div2 = '</div>'
                , scale = '<form class="form-inline"><input type="number" class="form-control" id=scale1' + count + ' placeholder="Rating Scale(min)"><label id=to' + count +'> to </label><input type="number" class="form-control" id=scale2' + count +  ' placeholder="Rating Scale(max)"></form>';
              

            dncount = dncount - 1;
            var full = spacer + '<form class="form-inline">' + criteria + scale + '</form>';

            $('#addCrit').append(div1, full, div2);
            if (count == lim) {
                alert("Limit of 30 groups met");
            }
            var currForms = 0;
            dummy = count - 1;

        
        
            //alert("Add group members to existing group before creating a new one");
        
        console.log(dncount);
        dncount = dncount + 2;;
    });
    
    // alert("Confirm group and include members before adding another group")


    $("#takeC").on("click", function () {
        $('#in' + count).remove();
        $('#name' + count).remove();
        $('#break' + count).remove();
        $('#sp' + count).remove();
        $('#scale1' + count).remove();
        $('#scale2' + count).remove();
        $('#to' + count).remove();
        count--;
    });

    $("#continue").on("click", function () {
        if (dncount == count)
            window.location.href = "pr_create(two).html";
    });
});