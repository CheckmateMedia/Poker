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