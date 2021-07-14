

function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  
  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}



var loader = document.querySelector(".loader");

setTimeout(() => {
window.addEventListener("load", vanish);



function vanish() {
  loader.classList.add("disppear");
  document.querySelector('body').style.overflowY = 'auto';
  document.querySelector(".loader").style.display = 'none';
}
vanish();

const effect = document.querySelector('.click_effect');




const text = baffle(".text");
text.set({
      characters : '▓▒░█▀X$$€<>╬▓▒░█▀▓▒░█▀/>',
      speed: 120
});
text.start();
text.reveal(50000);
}, 7000);




const navSlide = () => {
  const burger =  document.querySelector('.burger');
  const nav = document.querySelector('.menu_list');
  const body = document.querySelector('body');
  const items1 = document.querySelector('.nav_links-1');
  const items2 = document.querySelector('.nav_links-2');
  const items3 = document.querySelector('.nav_links-3');
  const items4 = document.querySelector('.nav_links-4');

  burger.addEventListener('click',() => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('menu_active');
    body.style.animation = '';
    setTimeout(() => {
      body.style.animation = 'glitch-anim-flash 0.5s linear alternate';
      body.style.animation = 'glitch-anim-1 0.5s linear alternate';
      body.style.animation = 'glitch-anim-2 0.5s linear alternate';
    }, 1);
  })

  items1.addEventListener('click', () => {
    body.style.animation = '';
    setTimeout(() => {
      body.style.animation = 'glitch-anim-flash 0.5s linear alternate';
      body.style.animation = 'glitch-anim-1 0.5s linear alternate';
      body.style.animation = 'glitch-anim-2 0.5s linear alternate';

      
    }, 1);
  })

  items2.addEventListener('click', () => {
    body.style.animation = '';
    setTimeout(() => {
      body.style.animation = 'glitch-anim-flash 0.5s linear alternate';
      body.style.animation = 'glitch-anim-1 0.5s linear alternate';
      body.style.animation = 'glitch-anim-2 0.5s linear alternate';
      
    }, 1);
  })

  items3.addEventListener('click', () => {
    body.style.animation = '';
    setTimeout(() => {
      body.style.animation = 'glitch-anim-flash 0.5s linear alternate';
      body.style.animation = 'glitch-anim-1 0.5s linear alternate';
      body.style.animation = 'glitch-anim-2 0.5s linear alternate';
      
    }, 1);
  })

  items4.addEventListener('click', () => {
    body.style.animation = '';
    setTimeout(() => {
      body.style.animation = 'glitch-anim-flash 0.5s linear alternate';
      body.style.animation = 'glitch-anim-1 0.5s linear alternate';
      body.style.animation = 'glitch-anim-2 0.5s linear alternate';
      
    }, 1);
  })
}
navSlide();




  


  

