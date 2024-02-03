function calculations(){
    var calc1 = parseInt(document.getElementById("divide").value);
    var calc2 = parseInt(document.getElementById("divide2").value);

    var ans = calc1/calc2;

    document.getElementById("input1").value = ans.toFixed(2);

}