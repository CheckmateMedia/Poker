function deal() {
    //Hide
    document.getElementById("intro").style.display = 'none'
    document.getElementById("two").style.display = 'none'
    //Show
    document.getElementById("one").style.display = 'block'
}

function newHand() {
    //Show
    document.getElementById("two").style.display = 'block'
    //Hide
    document.getElementById("one").style.display = 'none'
    document.getElementById("intro").style.display = 'none'
}

//Clubs
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var c6 = document.getElementById('c6')
var c7 = document.getElementById('c7')
var c8 = document.getElementById('c8')
var c9 = document.getElementById('c9')
var c10 = document.getElementById('c10')
var c11 = document.getElementById('c11')
var c12 = document.getElementById('c12')
var c13 = document.getElementById('c13')
//Spades
var s1 = document.getElementById('s1')
var s2 = document.getElementById('s2')
var s3 = document.getElementById('s3')
var s4 = document.getElementById('s4')
var s5 = document.getElementById('s5')
var s6 = document.getElementById('s6')
var s7 = document.getElementById('s7')
var s8 = document.getElementById('s8')
var s9 = document.getElementById('s9')
var s10 = document.getElementById('s10')
var s11 = document.getElementById('s11')
var s12 = document.getElementById('s12')
var s13 = document.getElementById('s13')
//Hearts
var h1 = document.getElementById('h1')
var h2 = document.getElementById('h2')
var h3 = document.getElementById('h3')
var h4 = document.getElementById('h4')
var h5 = document.getElementById('h5')
var h6 = document.getElementById('h6')
var h7 = document.getElementById('h7')
var h8 = document.getElementById('h8')
var h9 = document.getElementById('h9')
var h10 = document.getElementById('h10')
var h11 = document.getElementById('h11')
var h12 = document.getElementById('h12')
var h13 = document.getElementById('h13')
//Diamonds
var d1 = document.getElementById('d1')
var d2 = document.getElementById('d2')
var d3 = document.getElementById('d3')
var d4 = document.getElementById('d4')
var d5 = document.getElementById('d5')
var d6 = document.getElementById('d6')
var d7 = document.getElementById('d7')
var d8 = document.getElementById('d8')
var d9 = document.getElementById('d9')
var d10 = document.getElementById('d10')
var d11 = document.getElementById('d11')
var d12 = document.getElementById('d12')
var d13 = document.getElementById('d13')


//in use
var myArray = [
    //Clubs
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13,
    //Spades
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
    //Hearts
    h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13,
    //Diamonds
    d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13,
];

var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
var randomItem2 = myArray[Math.floor(Math.random() * myArray.length)];

randomItem.style.display = 'block';
randomItem2.style.display = 'block';



