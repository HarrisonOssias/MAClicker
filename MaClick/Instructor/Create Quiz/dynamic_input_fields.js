$(document).ready(function() {
    var max_fields = 20; //maximum input boxes allowed
    var wrapper = $(".items"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID
        
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();

        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="form-group"><label for="title">Author Email:</label>' + '<input class="form-control col-md-11" id="author_email" type="email" placeholder=""name="author"/>' + '<a href="#" class="remove_field"><i class="fa fa-times"></a></div>'); //add input box
        }
    });
        
    $("remove_field_button").on("click",".remove_field", function(e){ //user click on remove field
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});
