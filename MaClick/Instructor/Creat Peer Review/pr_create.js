lim = 30;
count = 0;
dncount = 0;
$(function () {
    $("#addG").on("click", function () {
        dncount++;
        if (dncount > 0) {
            count++;
            var nameForm = '<input id=in' + count + ' type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Group Name">'
                , spacer = '<br id=sp' + count + '>'
                , div1 = '<div>', div2 = '</div>'
                , size = '<input id=size' + count + ' class="form-control" type="number" placeholder="Size">'
                , membdiv = '<div id=membdiv' + count + ' ></div>';

            dncount = dncount - 1;
            var full = spacer + '<form class="form-inline">' + nameForm + size + membdiv + '</form>';

            $('#addGroup').append(div1, full, div2);
            if (count == lim) {
                alert("Limit of 30 groups met");
            }
            var currForms = 0;
            dummy = count - 1;

            $("#size" + count).change(function () {
                dncount++;
                var numForms = document.getElementById("size" + count).value;
                if (currForms > numForms) {
                    for (currForms; currForms >= numForms; currForms--) {
                        $('#member' + currForms).remove();
                    }

                    currForms = numForms;
                }
                else {
                    for (currForms; currForms < numForms; currForms++) {
                        var memb = '<br><input id=member' + currForms + ' type="number" class="form-control" placeholder="Member"' + currForms + 1 + '>';
                        $('#membdiv' + count).append(memb);
                    }

                }
            });
        }
        else{
            alert("Add group members to existing group before creating a new one");
        }

        /*$("#conf" + count).click(function () {
            dncount++
            var x = document.getElementById("size" + count).value;
            for (i = 0; i < x; i++) {
                var memb = '<input  id="member"' + count + ' type="number" class="form-control " placeholder="Member" ' + i + 1 + '>';
                $('#membdiv' + count).append(memb);
            }
        });*/
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

    $("#continue").on("click", function () {
        if (dncount == count)
            window.location.href = "pr_create(two).html";
    });
});