const cars = ['bmw','audi','smart']
//cars[3]='mb'

//dodavanje elemenata na kraj  niza = push
cars.push('mercedes')
cars.push('seat','jaguar')

//za brisanje zadnjeg clana = pop
//cars.pop()
//const zadnji = cars.pop() // kad hocemo da nadjemo zadnjeg clana niza

//dodavanje na pocetak niza = unshift
cars.unshift('ford', 'reno')
//cars.unshift('kadilak')

//oduzimanje prvog clana niza = shift
const shift = cars.shift()

//okrece niz naopako = reverse
cars.reverse()

//spajanje dva nize = concat(niz)
const imena = ['faris','isko','aldin']
const god = [20,30,40,160,76]
const spojenNiz = imena.concat(god)
console.log(spojenNiz);

//za trazenje clana = find()
const trazenje = god.find((el) =>el > 50 && el<100)  //vraca samo prvog clana ko ispunjava uslov
console.log(trazenje);

//trazenje indeksa
const trazeni = god.findIndex((el) => el <100)
console.log(trazeni);


console.log(shift);
console.log(cars);
//console.log(zadnji);


// const godine = [12,76,26,6,23,21,29,16]
// const druge = [12,45,34,51,14,3,7,18]


// function dajmipunoletne(ages) {
//     const punoletni = [];
//     for (let age of ages) {
//         if (age >= 18){
//             punoletni.push(age)
//         }
//     }
//     return punoletni;

// }

// function dajmipunoletne(ages) {
//     const maloletni = [];
//     for (let age of ages) {
//         if (age < 18){
//             maloletni.push(age)
//         }
//     }
//     return maloletni;

// }



// console.log(dajmipunoletne(druge))
