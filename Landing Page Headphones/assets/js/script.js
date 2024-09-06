const menu =document.querySelector('.menu');
const btnMenu=document.querySelector('.btn-menu');
const btnClose=document.querySelector('.btn-close');

btnMenu.addEventListener('click',()=>{
    menu.classList.add('active');
})
btnClose.addEventListener('click',()=>{
    menu.classList.remove('active');
})
gsap.from('.btn-menu',{
    opacity:0,
    duration:1,
    delay:0.1,
    y:-10
});
gsap.from('.logo',{
    opacity:0,
    duration:1,
    delay:0.3,
    y:-10
});
gsap.from('.btn-group',{
    opacity:0,
    duration:1,
    delay:0.6,
    y:-10
});
gsap.from('section img',{
    opacity:0,
    duration:1,
    delay:1,
    x:-100
});
gsap.from('section .content h1',{
    opacity:0,
    duration:1,
    delay:1.2,
    x:-100
});
gsap.from('section .content p',{
    opacity:0,
    duration:1,
    delay:2,
    x:-10
});
gsap.fromTo('section .content .btn-primary',{
    opacity:0,
    duration:1,
    delay:2.2,
    y:0
},{
    opacity:1,
    duration:1,
    delay:2.2,
    y:0
})
gsap.from('section .content .color-list',{
    opacity:0,
    duration:1,
    delay:2.6,
    x:100
});
gsap.from('.rrss ul li:nth-child(1)',{
    opacity:0,
    duration:1,
    delay:3,
     y:-10
});
gsap.from('.rrss ul li:nth-child(2)',{
    opacity:0,
    duration:1,
    delay:3.5,
    y:-10
});
gsap.from('.rrss ul li:nth-child(3)',{
    opacity:0,
    duration:1,
    delay:4,
    y:-10
});
let colorList = document.querySelector(".color-list");
let imgProduct = document.getElementById("img-product"); 

colorList.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-color')) { // Sin el punto en 'btn-color'
        const newImage = event.target.getAttribute('data-img');
        const newColor = event.target.getAttribute('data-color');
        imgProduct.src = newImage;
        document.documentElement.style.setProperty('--primary-color', newColor);
        gsap.from('section img', {
            opacity: 0,
            duration: 1,
            delay: 1,
            x: -100
        });
    }
});