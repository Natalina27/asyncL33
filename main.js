const body = document.body;
const page = document.getElementById('page');
const preloader = document.querySelector('.preloader');
body.replaceChild(preloader, page);

setTimeout(() => body.replaceChild(page, preloader), 16000);



