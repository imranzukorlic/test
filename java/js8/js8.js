//FILTER I MAP

// const data = [100,65,76,80,9,53,1,2]

// const returnEven = (numbers) => {
//     const brojevi = numbers.filter((num)=> num % 2 === 0 && num <= 50) //mozemo je samo retrnat posto nece da se koisti vise
//     // const lessThan50 = brojevi.filter(el => el <= 50)
//     return brojevi
// }

// const data = [5,3,2,8,7,9]
// const returnPow = (numbers) => {
//     return pow = numbers.map(el => el*el + 10)
// }



//reduse
// const data = [100,200,250,400,520]

// const cartTotal = data.reduce(
//     (previousValue, currentValue) => previousValue + currentValue, 500 //odakle krece , 
// )

const data = [26,18,16,22,30,28]

const sumAvgAge = (ages) => {
    const prosek = data.reduce((previousValue, currentValue)=> previousValue + currentValue)/ ages.length //to fixed vrac string, a + ispred broj
    return +prosek.toFixed(2) //parseInt je za cijeli broj a plus ili parseFloat  za decimalu
}



console.log(sumAvgAge(data));


//console.log(returnPow(data));




const provera = [122,23,65,48,65]
const some = (numbers) =>{
    return nesto = numbers.some(el => el > 100) //some dali nesto ispunajva uslov, a ever dalis sve ispunjava uslocv
}
console.log(some(provera));

const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('dog')); //vraca samo ako trazis tacan clan niza (true)

console.log(pets.join(',')); // join pokazuje cime da odvoji elemente u nizu
