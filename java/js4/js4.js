//NIZOVI
const cars = ['bmw' ,7 , 'audi' ,null, 'vw' ,0, 'skoda' , 'mercedes']
               //0.   //1.     //2.    //3.      //4.
// console.log(cars);

// console.log(cars.length);  //za duzinu niza cars.length

// console.log(cars[1]);     //ovako nalazimo clan u nizu

// // console.log(cars[7][2]);  //trazimo clan niza u nizu

// cars[0] = 3
// console.log('prije mijenjanja duzine' , cars);

// cars.length = 0     //koliko uzima clanova u nizu
// console.log(cars);
// for(let i = 0; i<cars.length; i++){
//     console.log(cars[i]);
// }


// for(let i = 0; i <cars.length; i++){  
//    if(cars[i]) {
//        console.log(cars[i]);}
// }


for (let car in cars){     //in petlja samo za nizove
    console.log('indeks',car ,'vrednost calana',cars[car]);
}



//console.log(cars);

const studenti = ['marko','janko','sasa']
studenti[8]='zika'
console.log(studenti);

const niz = new Array ('jedan','dva','tri')
console.log(niz);
