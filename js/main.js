// Inicializar iconos
lucide.createIcons();

// Elementos

const header = document.getElementById("header");

const overlay = document.querySelector(".overlay");

const mobileMenu = document.querySelector(".mobile-menu");

const openBtn = document.querySelector(".menu-toggle");

const closeBtn = document.querySelector(".close-menu");

// Header al hacer scroll

window.addEventListener("scroll",()=>{

    header.classList.toggle("scrolled",window.scrollY>30);

});

// Abrir menú

function openMenu(){

    mobileMenu.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("menu-open");

}

// Cerrar menú

function closeMenu(){

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

}

openBtn.addEventListener("click",openMenu);

closeBtn.addEventListener("click",closeMenu);

overlay.addEventListener("click",closeMenu);

// Cerrar al pulsar un enlace

document.querySelectorAll(".mobile-menu a").forEach(link=>{

    link.addEventListener("click",closeMenu);

});

/*======================================================
VIDEOS
======================================================*/

const videos = document.querySelectorAll(".video-preview video");

videos.forEach(video => {

    // Comienza siempre pausado
    video.pause();

    // Hover escritorio
    video.parentElement.addEventListener("mouseenter", () => {

        video.play();

    });

    video.parentElement.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

    // Click = pantalla completa

    video.parentElement.addEventListener("click", () => {

        if (video.requestFullscreen) {

            video.requestFullscreen();

        } else if (video.webkitRequestFullscreen) {

            video.webkitRequestFullscreen();

        } else if (video.msRequestFullscreen) {

            video.msRequestFullscreen();

        }

        video.controls = true;

        video.play();

    });

});

/*======================================================
PRODUCTOS INFINITOS
======================================================*/

const productsTrack = document.querySelector(".products-track");

if (productsTrack) {

    productsTrack.innerHTML += productsTrack.innerHTML;

}
/*======================================================
LUCIDE
======================================================*/

lucide.createIcons();