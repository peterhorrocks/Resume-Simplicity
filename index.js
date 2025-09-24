// Display section according to button clicked

function displayIntroduction() {
    var x = document.getElementById("intro");
    $(".intro-section").show("slow");
    x.style.display = "flex";

    x = document.getElementById("resume");
    x.style.display = "none";
    x = document.getElementById("projects");
    x.style.display = "none";
    x = document.getElementById("contact");
    x.style.display = "none";
    x = document.getElementById("privacy");
    x.style.display = "none";
    x = document.getElementById("terms");
    x.style.display = "none";
    x = document.getElementById("bigmac-links");
    x.style.display = "none";
    x = document.getElementById("bigmac1-links");
    x.style.display = "none";
}

function displayResume() {
    var x = document.getElementById("resume");
    $(".resume-section").show("slow");
    x.style.display = "flex"

    x = document.getElementById("intro");
    x.style.display = "none";
    x = document.getElementById("projects");
    x.style.display = "none";
    x = document.getElementById("contact");
    x.style.display = "none";
    x = document.getElementById("privacy");
    x.style.display = "none";
    x = document.getElementById("terms");
    x.style.display = "none";
    x = document.getElementById("bigmac-links");
    x.style.display = "none";
    x = document.getElementById("bigmac1-links");
    x.style.display = "none";
}

function displayProjects() {
    var x = document.getElementById("projects");
    $(".projects-section").show("slow");
    x.style.display = "flex";

    x = document.getElementById("intro");
    x.style.display = "none";
    x = document.getElementById("resume");
    x.style.display = "none";
    x = document.getElementById("contact");
    x.style.display = "none";
    x = document.getElementById("privacy");
    x.style.display = "none";
    x = document.getElementById("terms");
    x.style.display = "none";
    x = document.getElementById("bigmac-links");
    x.style.display = "none";
    x = document.getElementById("bigmac1-links");
    x.style.display = "none";
}

function displayContact() {
    var x = document.getElementById("contact");
    $(".contact-section").show("slow");
    x.style.display = "flex";

    x = document.getElementById("intro");
    x.style.display = "none";
    x = document.getElementById("resume");
    x.style.display = "none";
    x = document.getElementById("projects");
    x.style.display = "none";
    x = document.getElementById("privacy");
    x.style.display = "none";
    x = document.getElementById("terms");
    x.style.display = "none";
    x = document.getElementById("bigmac-links");
    x.style.display = "none";
    x = document.getElementById("bigmac1-links");
    x.style.display = "none";
}

function displayPrivacy() {
    let x = document.getElementById("privacy");
    $(".privacy-section").show("slow");
    x.style.display = "flex";

    x = document.getElementById("intro");
    x.style.display = "none";
    x = document.getElementById("resume");
    x.style.display = "none";
    x = document.getElementById("projects");
    x.style.display = "none";
    x = document.getElementById("contact");
    x.style.display = "none";
    x = document.getElementById("terms");
    x.style.display = "none";
    x = document.getElementById("bigmac-links");
    x.style.display = "none";
    x = document.getElementById("bigmac1-links");
    x.style.display = "none";
}

function displayTerms() {
    var x = document.getElementById("terms");
    $(".terms-section").show("slow");
    x.style.display = "flex";

    x = document.getElementById("intro");
    x.style.display = "none";
    x = document.getElementById("resume");
    x.style.display = "none";
    x = document.getElementById("projects");
    x.style.display = "none";
    x = document.getElementById("privacy");
    x.style.display = "none";
    x = document.getElementById("bigmac-links");
    x.style.display = "none";
    x = document.getElementById("bigmac1-links");
    x.style.display = "none";
    x = document.getElementById("contact");
    x.style.display = "none";
}


// SCRIPT for Header Mobile Big Mac Menu

function myFunction() {
    var x = document.getElementById("bigmac-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// SCRIPT for Footer Mobile Big Mac Menu

function myFunction1() {
    var x = document.getElementById("bigmac1-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



