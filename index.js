//Test

function buttonClick() {
    //Show
    document.getElementById("playCards").style.display = "block";
    //Hide
    document.getElementById("deal").style.display = "none";
    document.getElementById("deal").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("ante").style.display = "none";
    document.getElementById("table").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.getElementById("enter").style.display = "none";
    document.getElementById("input").style.display = "none";
}

function newHand() {
    //Show
    document.getElementById("deal").style.display = "inline-block";
    document.getElementById("deal").style.position = "relative";
    document.getElementById("table").style.display = "block";
    document.getElementById("table").style.position = "absolute";
    console.log("test")
    //Not working
    document.getElementById("enter").style.display = "inline-block";

    //Hide

    document.getElementById("ante").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementsByClassName("cards")[0].style.display = "none";
    document.getElementById("done").style.display = "none";
}

function hideBanner() {
    //Hides
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("bannerText").style.display = "none";
    document.getElementById("bannerText").style.display = "none";
    document.getElementById("main").style.display = "none";
    //Shows
    document.getElementsByClassName("cards")[0].style.display = "block";
}

function bet() {
    document.getElementById("purse").innerhtml = 500;
    console.log("4x4")
}
