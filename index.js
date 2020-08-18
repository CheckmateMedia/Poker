function deal() {
    //Hide

    document.getElementById("intro").style.display = 'none'
    document.getElementById("one").style.display = 'none'
    //Show
    document.getElementById("player1").style.display = 'block'
    document.getElementById("secondDeal").style.display = 'block'

    randomItem.style.display = 'block';
    randomItem2.style.display = 'block';

}
function deal2() {

    document.getElementById("intro").style.display = 'none'
    document.getElementById("one").style.display = 'none'
    document.getElementById("secondDealButton").style.display = 'none'
    document.getElementById("table").style.display = 'none'

    //Show
    document.getElementById("player2").style.display = 'block'
    document.getElementById("thirdDeal").style.display = 'block'



    randomItemThree.style.display = 'block';
    //randomItem4.style.display = 'block';


    console.log('fish')


}

function newHand() {
    //Show
    document.getElementById("one").style.display = 'block'
    document.getElementById("footer").style.display = 'block'
    document.getElementById("secondDealButton").style.display = 'block'
    //Hide
    document.getElementById("player1").style.display = 'none'
    document.getElementById("intro").style.display = 'none'
    document.getElementById("secondDeal").style.display = 'none'
    document.getElementById("firstDealButton").style.display = 'none'
    document.getElementById("thirdDeal").style.display = 'none'

}

function newHand2() {
    //Show
    document.getElementById("one").style.display = 'block'
    document.getElementById("outro").style.display = 'block'
    document.getElementById("footer").style.display = 'block'
    document.getElementById("outro").style.display = 'block'
    //Hide

    document.getElementById("player1").style.display = 'none'
    document.getElementById("player2").style.display = 'none'
    document.getElementById("intro").style.display = 'none'
    document.getElementById("secondDeal").style.display = 'none'
    document.getElementById("thirdDeal").style.display = 'none'



}

function reload() {
    location.reload();
}
/*
function newHand() {
    //Show
    document.getElementById("one").style.display = 'block'
    document.getElementById("secondDealButton").style.display = 'block'
    //Hide
    document.getElementById("player1").style.display = 'none'
    document.getElementById("intro").style.display = 'none'
    document.getElementById("secondDeal").style.display = 'none'
    document.getElementById("secondDealButton").style.display = 'none'


}
*/
//---------------------------------------Player1 Cards

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

//---------------------------------------Player2 Cards

//Clubs
var c12 = document.getElementById('c12')
var c22 = document.getElementById('c22')
var c32 = document.getElementById('c32')
var c42 = document.getElementById('c42')
var c52 = document.getElementById('c52')
var c62 = document.getElementById('c62')
var c72 = document.getElementById('c72')
var c82 = document.getElementById('c82')
var c92 = document.getElementById('c92')
var c102 = document.getElementById('c102')
var c112 = document.getElementById('c112')
var c122 = document.getElementById('c122')
var c132 = document.getElementById('c132')
//Spades
var s12 = document.getElementById('s12')
var s22 = document.getElementById('s22')
var s32 = document.getElementById('s32')
var s42 = document.getElementById('s42')
var s52 = document.getElementById('s52')
var s62 = document.getElementById('s62')
var s72 = document.getElementById('s72')
var s82 = document.getElementById('s82')
var s92 = document.getElementById('s92')
var s102 = document.getElementById('s102')
var s112 = document.getElementById('s112')
var s122 = document.getElementById('s122')
var s132 = document.getElementById('s132')
//Hearts
var h12 = document.getElementById('h12')
var h22 = document.getElementById('h22')
var h32 = document.getElementById('h32')
var h42 = document.getElementById('h42')
var h52 = document.getElementById('h52')
var h62 = document.getElementById('h62')
var h72 = document.getElementById('h72')
var h82 = document.getElementById('h82')
var h92 = document.getElementById('h92')
var h102 = document.getElementById('h102')
var h112 = document.getElementById('h112')
var h122 = document.getElementById('h122')
var h132 = document.getElementById('h132')
//Diamonds
var d12 = document.getElementById('d12')
var d22 = document.getElementById('d22')
var d32 = document.getElementById('d32')
var d42 = document.getElementById('d42')
var d52 = document.getElementById('d52')
var d62 = document.getElementById('d62')
var d72 = document.getElementById('d72')
var d82 = document.getElementById('d82')
var d92 = document.getElementById('d92')
var d102 = document.getElementById('d102')
var d112 = document.getElementById('d112')
var d122 = document.getElementById('d122')
var d132 = document.getElementById('d132')

//---------------------------------------------------------------------------------------hand1
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

var randomItem = myArray[Math.floor(Math.random() * 52)];
var randomItem2 = myArray[Math.floor(Math.random() * 52)];



//--------------------------------------------------------------------------------hand 2
var myArraytwo = [
    //Clubs
    c12, c22, c32, c42, c52, c62, c72, c82, c92, c102, c112, c122, c132,
    //Spades
    s12, s22, s32, s42, s52, s62, s72, s82, s92, s102, s112, s122, s132,
    //Hearts
    h12, h22, h32, h42, h52, h62, h72, h82, h92, h102, h112, h122, h13,
    //Diamonds
    d12, d22, d32, d42, d52, d62, d72, d82, d92, d102, d112, d122, d132,
];

var randomItemThree = myArraytwo[Math.floor(Math.random() * 52)];
var randomItem4 = myArraytwo[Math.floor(Math.random() * 52)];







