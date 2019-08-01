$(document).ready(function() {
    var string;//string to store the inputted value
    var count;//initializing counter variable
    $(".checkText").on('click', function() {
        string = $(".input-text").val();
        count = 0;
        //compares string's first element and last element index, second and last second and so on until the length of string is parsed
        for(i=0;i<string.length;i++) {
            if(string.charAt(i)==string.charAt((string.length)-i-1)) {
                count++;//everytime the match happens, counter is incremented
                if(count==(string.length)-1) { //If counter value equals to length of string -1 result will be palindrome
                    $(".testResult").html("Palindrome").css("color","cornflowerblue");
                } 
            } else {
                $(".testResult").html("Not a Palindrome").css("color","red"); 
                break;
            }
        }
    });
    $(".input-text").keyup(function(event) {
        if(event.which==13) { //firing the palindrome check function with enter key
            $(".checkText").trigger("click");
        } else if(event.which == 8||e.which == 46) { //clearing the result if input box is empty
            if($(".input-text").val()=="") {
            $(".testResult").html("");
            }
        }
    });
});