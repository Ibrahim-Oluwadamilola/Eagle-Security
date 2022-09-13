let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}
let searchform = document.querySelector('.search-form');

document.querySelector('#search-box').onclick = () =>{
    search-form.classList.toggle('active');
    navbar.classList.remove('active');

}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
}