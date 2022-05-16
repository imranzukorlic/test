let godine = 20

switch( godine ){
    case 20:
        console.log('Ima 20 godina')
        break;
    case 10:
        console.log('Ima 10 godina')
        break;
    default:
        console.log('nije upao ni u jedan case')
}


const dalijesuncano = true

if(dalijesuncano){    //kad poredis sa true onda ne stavljas nista, a kad sa false onda dodas ! ispred
    console.log("ponesi naocare")
}else{
    console.log('ne terbaju ti naocare')
}

//TERNARY OPERATOR

dalijesuncano ? console.log('dansa je suncano'): console.log('nije suncano')
let age = 18
let punoletan = age >= 18 ? true : false
console.log('punoletan' , punoletan);

if(""){
    console.log("tacna vrijednnost");
}else{
    console.log("netacna vrijednost");
}

