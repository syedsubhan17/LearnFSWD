const body = document.querySelector(`body`);
const textbox = document.querySelector(`h1 span`);
const heading = document.querySelector(`h1`);

let count = 0;
body.addEventListener('click',()=>{
    console.log("you Clicked")
    textbox.innerHTML = ++count;
})