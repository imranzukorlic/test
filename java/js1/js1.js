

//let i const
//let je promenljiv
//const je nepromenljiv

//console.log(5===5)   //za jednako
//console.log(5=='5') //ne koristi jer uporedjuje samo vrijednost
//console.log(5!==6) //za nejednako
//console.log(6!==6)
//console.log(6>7)  //koristi se ><,>=,<=

//const nesto = prompt('unesi tvoje ime')
//const drugo = prompt('unesi svoje godine')

//alert('Ziveo si '+ drugo*12+'meseci')  //prompt se mora skladistit negde


//const ime = 'Max'
//const godine = 40

//const meseci = godine * 12

//console.log(meseci)
//prefiksni i posfiksni operateri
//let age =20
//console.log(++age) //prefiks prvo odradi pa prikaze
//console.log(age++) //posfoksni prikaze pa posle radi operaciju
//console.log(age)

//kondicionali

//const age = 'nesto'
//if (age >= 18){    //u zagradi je uslov
//    console.log('punoletan si')  //blok se nalazi u vit-zagradama
//}

//else if (age<18){  //ako nije if onda se proverava else if
//    console.log('jos si maLJi')
//}
//else {  
//    console.log('pokrece se samo u slucaju kad nijedan uslov nije zadovoljen')
//}

// const age = prompt('unesi godine')

// if (+age === 18){
//     console.log('tek si postao punoletan')
// }
// else if(+age>18){
//     console.log('ti si odrastao')
// }
// else if(+age>12){
//     console.log('ti si tinejdzer')
// }
// else {
//     console.log('ti si dete')
// }

// const a = 4
// const b = 5
// const c = ''

// console.log( a && b && c)//and operator (vraca zadnjeg)

const a = 4
const b = false

console.log(a||b) //or operator (uvek vraca prvog)

console.log(!1)