
const page = document.getElementById('page');
const preloader = document.querySelector('.preloader');
preloader.style.display = 'none';

 const onClick = ()  => {
     preloader.style.display = 'block';
     page.style.display = 'none';
 };


 page.addEventListener('click', onClick);

setTimeout(() => {
    preloader.style.display = 'none';
    page.style.display = 'block';
    }, 2000);