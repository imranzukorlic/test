const broj1 = parseInt(prompt('unesi pocetni broj'))
const broj2 = parseInt(prompt('unesi zadnji broj'))

for (let i = broj1; i <= broj2; i++) {
    if (i % 2 === 0) {
        console.log('paran broj'+ ' ' + i);
    }else{
        console.log('neparan broj'+ ' ' + i);
    }
    
}