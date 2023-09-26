const body = document.querySelector(`body`);
const textbox = document.querySelector(`h1 span`);
const heading = document.querySelector(`h1`);
const input = document.querySelector(`input`);

let count = 0;
heading.addEventListener('click',(event)=>{
    console.log(event)
    textbox.innerText = ++count;
})

// lets learn about event listener focus:
// input.addEventListener('focus',(e)=>{
//     console.log('input is focused')
// })

// focus in and out:
// input.addEventListener('focusin',(e)=>{
//     console.log('input is focused')

// })
// input.addEventListener('focusout',(e)=>{
//     console.log('input is out of focus')
// })

//  this can track the tab change
window.addEventListener('focus',(e)=>{
    console.log('tab changed detected')
})

// another event listener that is blur:
window.addEventListener('blur',(e)=>{
    console.log('blur changed detected')
})

// another event listener resize
window.addEventListener('resize',(e)=>{
    console.log('resize detected') // this will track the resizing the window
})

// lets track the scroll 
window.addEventListener('scroll',(e)=>{
    console.log('scroll detected') // this will track the resizing the window
})