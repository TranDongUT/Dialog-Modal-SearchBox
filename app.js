const btnSearch = document.querySelector('.search-btn');
const boxSearch = document.querySelector('.search-box');
const input = document.querySelector('.search-box input');
console.log(boxSearch);
btnSearch.addEventListener('click',()=>{
    boxSearch.classList.toggle('open');
    input.focus();
})
