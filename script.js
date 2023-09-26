const progressbar = document.querySelector("#progress")
const container = document.querySelector(".content")
// console.log(progressbar)
const contentHeight =  container.scrollHeight
const html = document.querySelector(`html`)
const scrollHeight = document.documentElement.scrollHeight

console.log(html.clientHeight)
// const bodyHeight = window.innerHeight
// console.dir(container)

//  this will increase length of progress bar as we scroll down
window.addEventListener("scroll",()=>{
    const scrollTop = window.scrollY
    console.log(scrollTop) // this will give how mush you scrolled
    const clientHeight = document.documentElement.clientHeight
    const scrolled = scrollTop / (scrollHeight) * 100

    
    progressbar.style.width = `${scrolled}%`
})
    // document.Element return you the HTML
// look what document. do:
console.log(document.documentElement)
console.log(document.querySelector(`html`))

console.log(document.documentElement.scrollHeight) // it will give you whole height