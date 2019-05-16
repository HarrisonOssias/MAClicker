lim = 30
count = 0
$(function () {
        $("#addG").on("click", function () {
            count++;
            
            var nameForm = '<input id=in'+count+' type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Group Name"></input>';
            var spacer = '<br id=sp' + count + '>';
            var breaking = '<br id=break' + count + '>';
            var div1 = '<div>', div2 = '</div>';
            var size = '<input id=size'+count+' type="number" class="form-control " placeholder="Size">';
            
        
            var full = spacer + '<form class="form-inline">' + nameForm + size +  '</form>';
            $('#addGroup').append(div1, full, div2);

            if (count == lim) {
                alert("Limit of 30 groups met");
            }

            alert(document.getElementById("size" + count).value);
            /*for (i=0; i++; i<=$("#size" + count).val()){
                var member = '<input id=mem'+ i+1 +' type="number" class="form" placeholder="Member"' + i+1 +'>';
                $('#addGroup').append(div1, member, div2);
            }*/

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
    
