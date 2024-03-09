
window.onscroll = function(ev) {
    const navbar = document.getElementsByClassName("scroll-bar")[0];
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        navbar.style.display = "none"
    }
    else {
        navbar.style.display = "block"
    }
};

function scrollButtonClicked() {
    document.getElementById('about-me').scrollIntoView();
}
