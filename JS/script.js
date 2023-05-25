function hitungLuas () {
    var sisiLuas = document.getElementById("sisi-luas").value;
    document.getElementsByClassName("result-luas").style.visibility="visible";
    document.getElementById("output-luas").innerHTML
        = '<span>'+sisiLuas+'</span>';
    console.log(sisiLuas); }
