//Black Pieces Vars
let BK = document.getElementById("BK");
let BQ = document.getElementById("BQ");
let BB1 = document.getElementById("BB1");
let BB2 = document.getElementById("BB2");
let BN1 = document.getElementById("BN1");
let BR1 = document.getElementById("BR1");
let BB2 = document.getElementById("BB1");
let BN2 = document.getElementById("BN1");
let BR2 = document.getElementById("BR2");
let BR2 = document.getElementById("BR2");

//White Pieces Vars
let WK = document.getElementById("WK");
let WQ = document.getElementById("WQ");
let WB1 = document.getElementById("WB1");
let WB2 = document.getElementById("WB2");
let WN1 = document.getElementById("WN1");
let WR1 = document.getElementById("WR1");
let WB2 = document.getElementById("WB1");
let WN2 = document.getElementById("WN1");
let WR2 = document.getElementById("WR2");
let WR2 = document.getElementById("WR2");

//Button Color on Click
function buttonClick() {
    document.getElementById("playCards").style.display = "none";
    document.getElementById("deal").style.display = "none";
    document.getElementById("deal").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("ante").style.display = "none";
    document.getElementByClassname("card").style.display = "none";
}

function done() {
    document.getElementById("playCards").style.display = "inline-block";
    document.getElementById("deal").style.display = "inline-block";
    document.getElementById("deal").style.display = "inline-block";
    document.getElementById("title").style.display = "inline-block";
    document.getElementById("ante").style.display = "inline-block";
    document.getElementByClassname("card").style.display = "inline-block";
}
