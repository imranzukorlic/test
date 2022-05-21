const koliko = parseInt( prompt('kaliko brojeva zelis da mnozis'))
let rez = 1

// for (let i = 0; i < koliko ;i++) {
//     let broj = parseInt(prompt('unesi broj'))
//     rez = rez * broj
// }
// alert ("ne zebava da je uspelo" + "  " + rez)

function boliglava(value) {
    for (let i = 0; i < value ;i++) {
        let broj = parseInt(prompt('unesi broj'))
        rez = rez * broj
    }
    alert ("ne zebava da je uspelo" + "  " + rez)
    
}
boliglava(koliko)