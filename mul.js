function multiply(){
    var newton = parseInt(document.getElementById("mul").value);
    var law = parseInt(document.getElementById("mul2").value);

    var mul = newton*law;

    document.getElementById("input2").value = mul.toFixed(2);
}