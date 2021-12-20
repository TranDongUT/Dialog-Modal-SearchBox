const btnSearch = document.querySelector('.search-btn');
const boxSearch = document.querySelector('.search-box');
console.log(boxSearch);
btnSearch.addEventListener('click',()=>{
    boxSearch.classList.toggle('open');
})