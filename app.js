const burger = document.querySelector('.burger');
const lien = document.querySelectorAll('.liens-navigation');
const nav = document.querySelector('nav');
const retourHaut = document.querySelector('.retourHaut');
let changeHaud = nav .offsetTop;

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})

let changefond = ()=> {
    if(window.scrollY>=200) {
        nav.classList.add("fond-scroll");
    }else {
        nav.classList.remove("fond-scroll");
    }

    if(window.scrollY >= 500) {
        retourHaut.classList.add('active');
    }else {
        retourHaut.classList.remove('active');
    }
}

window.addEventListener('scroll', changefond);
