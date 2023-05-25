function hidefunc1() {
    var x = document.getElementById("divlp");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    } }
function hidefunc2() {
    var x = document.getElementById("divkp");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    } }

function hitungLuas () {
    var sisiLuas = document.getElementById("sisi-luas").value;
    var luas = sisiLuas*sisiLuas;
    document.getElementById("rumus-luas").innerHTML = '<span>L = S x S</span>';
    document.getElementById("perhitungan-luas").innerHTML = '<span>L = '+sisiLuas+' x '+sisiLuas+'</span>';
    document.getElementById("output-luas").innerHTML = '<span>L = '+luas+'</span>';
    document.getElementsByClassName("result-luas").style.visibility="visible";
    console.log(luas); }

    function hitungKel () {
        var sisiKel = document.getElementById("sisi-kel").value;
        var kel = sisiKel*4;
        document.getElementById("rumus-kel").innerHTML = '<span>K = 4 x S</span>';
        document.getElementById("perhitungan-kel").innerHTML = '<span>K = 4 x '+sisiKel+'</span>';
        document.getElementById("output-kel").innerHTML = '<span>K = '+kel+'</span>';
        document.getElementsByClassName("result-kel").style.visibility="visible";
        console.log(kel); }

