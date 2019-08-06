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
var arr=[10,20,10,20,10,10,30];
function removeDuplicates(arr) {
    var newArr=[];
    for(var i=0;i<arr.length;i++) {
        if(newArr.indexOf(arr[i]) === -1)
            newArr.push(arr[i]);
    }
    return newArr;
}