const DATA1 = [2, 26, 38, 75, 11, 29]
const DATA2 = ['a', 'b', 'c', 'd', 'e']
const mutateArrays = (array1, array2) => {
    const spojenNiz = array1.concat(array2)
    const parni = []
    for (const el of spojenNiz) {
        if (el % 2 === 0) {
            parni.push(el)
        }
    }
    const plus = parni.unshift(10,20)
    return [spojenNiz, parni, plus]
}
console.log(mutateArrays(DATA1, DATA2));

//filter metoda//

// const words = ['televizor', 'daljinski', 'telefon', 'voda', 'ranac', 'stolica']
// const numbers = [29,54,167,8,21,2,845,154,5]

// const filtered1 = numbers.filter(el => el % 2 === 0)
// console.log(filtered1);

// const filtered = words.filter(el => el.length < 8) //samo se stavi zadatak zaa eleent umesto for petlje
// console.log(filtered);

//map metoda//

// const number = [2,5,3,1,10,8,7]
// const squernumbers = number.map((el, index, array) => {
//     if (index === 0 || index === 3|| index ===5) {
//         return el * el
//     }
//     return false
    
// })
// console.log(squernumbers);

const NIZOVI1=[1,3,4,2,7,6]
const dogAge = (ages) => {
    const human = ages.map((el)=>{
    if (el> 2 && el < 8 ) {
        return (el*4)/2;
    }else if(el > 2){
        return el * 7;
    }
    return el
 
})
const manjeless = human.filter((age)=> age <10)
return manjeless
}
console.log(dogAge(NIZOVI1));

