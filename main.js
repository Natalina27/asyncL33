const body = document.body;
const page = document.getElementById('page');
const preloader = document.createElement('div');
// preloader.src = "http://www.picshare.ru/view/10391702/";
preloader.className = 'preloader-spinner';
body.replaceChild(preloader, page);

//setTimeout(() => body.replaceChild(page, preloader), 2000);