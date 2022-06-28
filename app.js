var pi = 3.141592653589793238;
var tan = 0;
var cos = 1;
var sin = 0;

function clearScreen() {
    document.getElementById("result").value = "";
}

function input(value) {
    document.getElementById("result").value += value;
}

function equals() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function bsin(value){
    document.getElementById("result").value += value
}

function btan(value){
    document.getElementById("result").value = "";
    document.getElementById("result").value += value
}

function bcos(value){
    document.getElementById("result").value = "";
    document.getElementById("result").value += value
}

function sqrt(){
    
    var sr = document.getElementById("result").value;
    var sqr = Math.sqrt(sr)
    document.getElementById("result").value = sqr
}