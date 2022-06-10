//objekti

const mycar = {
    id: 1,
    marka: 'Audi',  //kljucevi se pisu ili jedna rijec ili spojeno ili sa donjom crtom
    model: 'a4',
    boja: 'crvena',
    pogon: 'prednji',
    menjac: 'auto',
    km: 240000,
    kontakt:[06311111, 020333],
    servisi:{
        "datum-servisa": '04.maj',
        km: 230000,
        serviser:'Geko'
    },
    udaran:true,
}


console.log(mycar);
console.log("Moj auto je marke:", mycar['model']); //   mycar.model   ===    mycar['model']
console.log('datum servisa', mycar.servisi['datum-servisa']);
console.log('serviser', mycar.servisi.serviser);


const radnik = {
    frstName: "Bob",
    lastName: 'Euroblok',
    fullName: function(){
        return this.frstName +" "+ this.lastName
    },
    adresa: {
        ulica: 'Avnoja',
        broj: 'bb',
        grad: 'Novi Pazar',
        getAdres: function(){
            return this
        }
        
    }
    // age: 30,
    // job: 'Programer',
    // adres: 'Avnoa BB',
    // city: 'Novi Pazar',
    // contact: '062318978',
    // radniSati: 170,
    // satnica: 20,
}
console.log(radnik.adresa.getAdres()); 
//console.log('radnik', radnik.frstName, radnik.lastName,', radi kao', radnik.job, ', ima' ,radnik.age,'godina, zivi u', radnik.city, ', i prima paltu', radnik.satnica*radnik.radniSati )
console.log(radnik.fullName());