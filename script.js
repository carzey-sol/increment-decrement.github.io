const num = document.querySelector('#disp-num');
let currentvalue = 0;
const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');
const reset = document.querySelector('#reset');

btnIncrement.addEventListener('click', () =>{

    currentvalue = currentvalue + 1;
    num.textContent = currentvalue;
});

btnDecrement.addEventListener('click', () =>{

    currentvalue = currentvalue - 1;
    num.textContent = currentvalue;
});
reset.addEventListener('click', () =>{

    currentvalue = 0;
    num.textContent = currentvalue;
});