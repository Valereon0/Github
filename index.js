let btn = document.getElementById('btn');
let changingText = document.getElementById('changingText');



const clickBtn = () => {
    changingText.textContent++;
};


btn.addEventListener('click', clickBtn);