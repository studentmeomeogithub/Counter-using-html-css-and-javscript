const maintilte = document.querySelector("#title")
let curValue = 0;
const btnDecrement = document.querySelector("#decrement")
const btnReset = document.querySelector("#Reset")
const btnIncrement = document.querySelector("#increment")

btnIncrement.addEventListener('click', ()=>{
    curValue++;
    maintilte.textContent = curValue;
    
});
btnDecrement.addEventListener('click', ()=>{
    curValue--;
    maintilte.textContent = curValue;
    
});
btnReset.addEventListener('click', ()=>{
    curValue = 0;
    maintilte.textContent = curValue;
    
});