function saberi_tri_pet(){
    const zbir = 3+5
    return zbir
}

// function sabiranje(a,b) {
//     return a + b
// }
// console.log(sabiranje(1000,15));

// function pozdrav(ime) {
//     alert('Pozdrav Korisnice'+ " "+ ime)
// }
// pozdrav('marko')

// function inchtocm(inch) {
//     return inch * 2.54;
// }
// console.log(inchtocm(10));

// const visina = inchtocm(25)
// console.log(visina);

const inchtocm = (inch) => inch * 2.54;
// const inchtocm = (inch) => {
//     return inch * 2.54;
// }

console.log(inchtocm(10));

const sabiranje = (a,b) => a + b
console.log(sabiranje(2,6));


const name = "faris"
function funkcija() {
    const name = "JUSUF"  // unutar viticastih zagrada moze da se menja ceonst verdnost dok van ne moze 
    console.log(name);    //(ne poznaje jedno drugo, zato sto su u razlicitim funkciajma)
}
funkcija()

function sabiraj(prvi, drugi, treci = false) {
    if (treci) {
        return prvi + drugi + treci;
    } else {
        return prvi + drugi;
    }
}
console.log(sabiraj(2,2,));
//domaci: DA UNESE TRI BROJA ,POTOM DA IH POMNOZI I DA ZADJE U ALERT
//domaci:DA UNESE BROJ BROJEVA KOLKO NJIH ZELI DA UNESE, PA U PROMT DA BROJVE I U ALERT IZADJE PROIZVOD 



// const saberi = function(){
//     //funkcija
// }

// const arrowFunction = () => {

// }



// console.log(zbir_tri_pet)