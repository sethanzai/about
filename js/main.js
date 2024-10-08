//Scroll navbar function
window.onscroll = function(ev) {
    const navbar = document.getElementsByClassName("scroll-bar")[0];
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        navbar.style.display = "none"
    }
    else {
        navbar.style.display = "block"
    }
};

//General scroll function
function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

//Scroll Button Function
function scrollButtonClicked() {
    var home = document.getElementById('home');
    var about = document.getElementById('about-app');
    var sections = document.getElementsByTagName('section');
    var nextSection = "";
    var nextSectionValue = 0;
    for (var i=0; i < sections.length; i++) {
        const sectionValue = sections[i].getBoundingClientRect().top
        if (sectionValue > 0) {
            if (nextSectionValue == 0) {
                nextSection = sections[i].id;
                nextSectionValue = sectionValue;
            }
            else if (nextSectionValue > sectionValue) {
                nextSection = sections[i].id;
                nextSectionValue = sectionValue;
            }
        }
    }
    scrollToSection(nextSection);
}


//Responsive design
function responsiveMenuFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

function menuToggle(x) {
    x.classList.toggle("change");
    document.getElementById("id-navbar").classList.toggle("open");
  }