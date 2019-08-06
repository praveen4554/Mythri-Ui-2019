var a;
var b="";
function reverseString(){
    a = document.getElementById("stringValue").value;
    for(i=a.length-1;i>=0;i--){
        b+=a.charAt(i);
    }
    document.getElementById("result").innerHTML=b;
    b="";
}