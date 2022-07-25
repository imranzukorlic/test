//document.getElementById(pocetak)
// document.getElementsByClassName(prva)
// document.querySelector('#id')
// document.getElementsByTagName()
// document.querySelectorAll('#id')


const glavniDiv = document.querySelector('#pocetak')
const body = document.querySelector("body")
const paragraf = document.createElement('p')
paragraf.textContent = "ovo je p dodato iz js"
glavniDiv.append(paragraf)
// glavniDiv.style.backgroundColor = "red" 
glavniDiv.classList.add("kocka")//dodavanje klase
paragraf.classList.add("text")

const dugme = document.createElement("button")
dugme.textContent = "click me"
glavniDiv.append(dugme)
const onButtonClick = () =>{
paragraf.classList.toggle("veci-font")
skriveniDiv.classList.toggle("nevidljiva")
}

dugme.addEventListener('click', onButtonClick )

const skriveniDiv = document.createElement("div")
skriveniDiv.classList.add("druga-kocka")
body.append(skriveniDiv)
skriveniDiv.innerHTML=`
<h1>Ovo je h1</h1>
<p>ovo je h2</p>
`
