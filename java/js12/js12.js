const students = [
    {name:'Faris', grade: 8, year:2,},
    {name:'Isko', grade: 10, year:4,},
    {name:'Aldin', grade: 8, year:2,},
    {name:'Amina', grade: 9, year:4,},
    {name:'Sabina', grade: 9, year:3,},
    {name:'Denis', grade: 7, year:4,},
    {name:'Senad', grade: 6, year:1,},
]
function getAvgGrade(array) {
    let grades = array.map(el=> el.grade)
    let sum = grades.reduce((a,b)=> a+b)
    return +(sum / grades.length).toFixed(2)
   
}
console.log(getAvgGrade(students));
getAvgGrade(students)

// call bind and apply
const person = {
    name: "John Doe",
    age: 22,
}
const car ={
    name: 'Audi'
}
function sayHello() {
    console.log(`Hello ${this.name}`);
}
sayHello.call(person)



let obj = {food: "pizza"};
function favFood(text, rating) {
    return `${this.food} ${text} ${rating}`
}
console.log(favFood.call(obj,"ukusno", 9));
console.log(favFood.apply(obj,["nije ukusno", 6]));

const bindFunc = favFood.bind(obj)
console.log(bindFunc("nije neka", 8));

const ime = "brat bratov"
const zanimanje = "lopov"
const godiste = 40
console.log(`${ime} je ${zanimanje}, i ima ${godiste} godina`);
