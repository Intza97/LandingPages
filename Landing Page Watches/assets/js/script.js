/*===== Redimensionar Navbar al Desplazar =====*/
var navbar = document.querySelector(".navbar");
window.onscroll = () => 
{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/* Navbar Toggler */
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) 
{
    navTogle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// cerrar el menú 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() 
{
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/* Colores del Producto */
var pic = document.querySelector("#main-shoe");
var cyan = document.querySelector(".cyan");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
const colors = document.querySelectorAll(".color");
// almacenar la información del producto en un objeto
var info = [
    {
        src: "assets/img/cyan.png"
    },
    {
        src: "assets/img/purple.png"
    },
    {
        src: "assets/img/blue.png"
    },
    {
        src: "assets/img/pink.png"
    },
    {
        src: "assets/img/green.png"
    },
    {
        src: "assets/img/red.png"
    }
]
// cambiar color
cyan.addEventListener("click", function() 
{
    pic.src = info[0].src;
});
purple.addEventListener("click", function() 
{
    pic.src = info[1].src;
});
blue.addEventListener("click", function() 
{
    pic.src = info[2].src;
});
pink.addEventListener("click", function() 
{
    pic.src = info[3].src;
});
green.addEventListener("click", function() 
{
    pic.src = info[4].src;
});
red.addEventListener("click", function() 
{
    pic.src = info[5].src;
});

// color activo
function color() 
{
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));
