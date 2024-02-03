function acc(){
    var fv = parseInt(document.getElementById("fv").value);
    var iv= parseInt(document.getElementById("iv").value);
    var t = parseInt(document.getElementById("t").value);


    var answer = (fv-iv)/t;

    document.getElementById("answer").value = answer.toFixed(2);
}