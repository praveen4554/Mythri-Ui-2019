$(document).ready(function(){
    var result;
    //Appending all the keys except equals sign typed by user to the display
    $(".keys").on('click', function() {
        if(!($(this).text()=='=')) {
            $("#display").append($(this).text());
        }
    }); 
    //To clear the display values when clicked on button C
    $(".clear").on('click', function() {
        $("#display").html("");
    });
    //Calculates the result using eval function and displays the result on calculator display
    $(".equalsSign").click(function(){
        result=(eval($("#display").text()));
         $("#display").html(result)
    });
});