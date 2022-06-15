const person1 = {
    name: "John Doe",
    age: 48,
    job: "Employed",
    address: "USE",
    kids: 4
}
// // Object.freeze(person)      ono je da ne moze da se mijenja
// Object.seal(person)          // ovo je da mozes da mijenjas al ne mozes da ubacujes
// person.name = "Neko Drugi"

// Object.keys(person)
// person.phone = "326482374289366823648237"

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person) );


const person2 = person1
// const person2 = {
//     name: "John Doe",
//     age: 48,
//     job: "Employed",
//     address: "USE",
//     kids: 4
// }
console.log(Object.is(person1,person2));

const name = ["faris","aldin","senad","dzenan"]
const newNames = ["isko",...name,"hamza"]
console.log(name);
console.log(newNames);


const nubers = [1,2,3,4,5,1,6,2,2]
const nemaDuplih = [...new Set(nubers)]  //set ne prima duplikate,   ... za pretvaranje u niz(i [])
const kvadrati = nemaDuplih.map(el=> el*el)
console.log(kvadrati);
console.log(nemaDuplih);

const spojen = [...name,...nubers]
console.log(spojen);

const neki = {
    name: "johin",
    state:"usa",
}

const opetneki = {
    ...neki,
    age: 36,
}
console.log(opetneki);

const moves = [
    {name: "move 1", raiting: 8,boget:"230m",},
    {name: "move 2", raiting: 5,boget:"200m",},
    {name: "move 3", raiting: 3,boget:"120m",},
    {name: "move 4", raiting: 9,boget:"90m",},
    {name: "move 5", raiting: 9.5,boget:"250m",},
]

const newMowe = moves.map(moves=> {
   return{ 
    name: moves.name,
    boget: moves.boget}
   
})
console.log(newMowe);




