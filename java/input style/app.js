const labels = document.querySelectorAll(".form label")
console.log(labels);
labels.forEach((label)=>{
    label.innerHTML = label.innerText.split("").map((letter, idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`).join("")
})
// output.innerHTML = '<h2>Mause X '+e.offsetX +'</h2>'+'<h2>Mause Y'+e.offsetY+'</h2>'
    // box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)'
    // document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)'


const color = document.querySelector('body')
color.addEventListener('click', runEvent)
function runEvent() {
    document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)'
}