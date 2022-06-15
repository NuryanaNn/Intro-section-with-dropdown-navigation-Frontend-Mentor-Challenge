let burger = document.querySelector('.burger');
let mobileNav = document.querySelector('.mobile-nav');
let closedNav = document.querySelector('.close');

burger.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
})

closedNav.addEventListener('click', function(){
    mobileNav.classList.remove('active');
})

let dropdown1 = document.querySelector('.drop1');
let dropdowncard = document.querySelector('.drop-down1');

dropdown1.addEventListener('click', function(){
    dropdowncard.classList.toggle('active');
})

let dropdown2 = document.querySelector('.drop2');
let dropdowncard2 = document.querySelector('.drop-down2');

dropdown2.addEventListener('click', function(){
    dropdowncard2.classList.toggle('active');
})

let dropdownmobile1 = document.querySelector('.drop-mobile-1');
let dropdowncardmobile1 = document.querySelector('.drop-down-mobile1');

dropdownmobile1.addEventListener('click', function(){
    dropdowncardmobile1.classList.toggle('active');
})

let dropdownmobile2 = document.querySelector('.drop-mobile2');
let dropdowncardmobile2 = document.querySelector('.drop-down-mobile2');

dropdownmobile2.addEventListener('click', function(){
    dropdowncardmobile2.classList.toggle('active');
})