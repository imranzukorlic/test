// const age = prompt('unesi godine')
// if (age >= 18 && age < 40){
//     console.log('odrastao si')
// }
// else if (+age > 11 && +age < 18){
//     console.log('tinejdzer')
// }
// else if (+age > 40){
//     console.log('covek')
// }
// else{
//     console.log('dete')
// }

//PETLJA FOR, WHILE, DO WHILW
let suma = 0;
for (let i = 0; i <= 15; i++){ //+=2 je i=i+2  a obican plus je ++
    console.log('brojac' , i)
    if( i % 2 === 0){
        console.log('unutra uslova' , i)
        suma += i
        // console.log('suma', suma)
        // suma = suma + i;
        // console.log('suma' , suma)
       
    }
}
// console.log('suma',suma)
 
// let n = 20
// while (n === 20){
//     console.log('kuku')
//     break
// }

// do{

// }while()

//fizzbuzz challenge
//0-100
// /3 = fizz
// /5 =buzz
// /5,3 =fizzbuzz
