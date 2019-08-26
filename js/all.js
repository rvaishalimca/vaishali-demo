function homePage() {
    document.getElementById("home-page").style.display = "block";
    document.getElementById("content-page").style.display = "none";
    document.getElementById("email-page").style.display = "none";
}

function ContactPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("content-page").style.display = "block";
    document.getElementById("email-page").style.display = "none";
}

function EmailPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("content-page").style.display = "none";
    document.getElementById("email-page").style.display = "block";
}