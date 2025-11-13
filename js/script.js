// Funcionalidad del Menú de Navegación Responsive
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Funcionalidad del Sticky Navbar
const stickyNav = () => {
    const nav = document.querySelector('.navbar-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // El número 50 es la distancia de scroll para que se active
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
};

// Llama a las funciones para que se ejecuten al cargar la página
navSlide();
stickyNav();

// Funcionalidad del Slider de Imágenes
let slideIndex = 1;
showSlides(slideIndex);

// Controles Siguiente/Anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Controles de puntos
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}