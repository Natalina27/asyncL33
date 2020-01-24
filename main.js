const body = document.body;
const page = document.getElementById('page');
const preloader = document.querySelector('.preloader');
body.replaceChild(preloader, page);

setTimeout(() => body.replaceChild(page, preloader), 2000);


// preloader.style.display = 'none';
//
//
//
//
//   const onClick = ()  => {
//       preloader.style.display = 'block';
//       page.style.display = 'none';
//  };
//
// button.addEventListener('click', onClick);
//
// setTimeout(() => {
//     preloader.style.display = 'none';
//     page.style.display = 'block';
//     }, 2000);

