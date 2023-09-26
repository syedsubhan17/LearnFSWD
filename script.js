const progressbar = document.querySelector("#progress")
const container = document.querySelector(".content")
// console.log(progressbar)
const html = document.querySelector(`html`)
const scrollHeight = document.documentElement.scrollHeight

// to track coping the content
window.addEventListener("copy",() => {
    alert("please dont copy my content");
})

// to track pasting
window.addEventListener("paste",() => {
    alert("please dont paste");
})