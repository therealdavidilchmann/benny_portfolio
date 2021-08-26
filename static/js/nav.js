function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

changeNavStyle = (type) => {
    let name = document.getElementById('Name');
    let photos = document.getElementById('nav-link-photos');
    let contact = document.getElementById('nav-link-contact');

    name.style.display = type;
    photos.style.display = type;
    contact.style.display = type;
}

var locked = false;
var container = document.getElementById('container');
var nav = document.getElementById('nav');

const isHovering = e => e.parentElement.querySelector(':hover') === e;   

window.addEventListener('scroll', function() {
    if (!locked) {
        window.requestAnimationFrame(function() {
            if (window.scrollY > 100) {
                changeNavStyle("none");
                nav.classList.remove("passive");
                nav.classList.add("active");
            } else {
                if (nav.classList.contains("active")){
                    nav.classList.remove("active");
                    nav.classList.add("passive");
                    sleep(450).then(e => changeNavStyle("block"));
                }
            }
            locked = false; 
        });
    }
    locked = true;
});

nav.addEventListener('mouseover', function() {
    if (nav.classList.contains("active") && !locked){
        nav.classList.remove("active");
        nav.classList.add("passive");
        sleep(450).then(e => changeNavStyle("block"));
    }
});