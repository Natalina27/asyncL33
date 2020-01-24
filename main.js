
const page = document.getElementById('page');
const preloader = document.querySelector('.preloader');
const button = document.querySelector('.button');
preloader.style.display = 'none';




  const onClick = ()  => {
      preloader.style.display = 'block';
      page.style.display = 'none';
 };

button.addEventListener('click', onClick);

setTimeout(() => {
    preloader.style.display = 'none';
    page.style.display = 'block';
    }, 2000);

