const miles = [15,20,1,60,45,120]
const konacno = (numbers) => {
    const kilometri = numbers.map(el=> el*1.60)
    const totalDistanceInKilometers = kilometri.reduce((a,b)=>a+b)
    return totalDistanceInKilometers
}
console.log(konacno(miles));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const kvadrati = (pojam)=>  {
    const niz = pojam.filter(el=> el % 2 ===0)
    const kvadrati = niz.map(a=> a*a )
    return  kvadrati.reduce((b,c)=> b+c)

}
console.log(kvadrati(numbers));

let strings = ["avengers", "captain america", "ironman", "black panther"];
const upper = (rec) =>{
    return rec.map(a=> a.toUpperCase())
}
console.log(upper(strings));