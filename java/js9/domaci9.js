let konj = [1,2]
for (let i = konj.length-1; i <konj.length; i++) {
    const budala = konj[i] + konj[i-1]
    if (budala < 4000000) {
        konj.push(budala)
    }
}
const filter = konj.filter((el) => el % 2 ===0)
// console.log(filter);
const reduce = filter.reduce((a,b)=> a+b)
// console.log(konj);
console.log(reduce);


function palindrom() {
    let arr = []
    for (let i = 999; i > 100; i--) {
        for (let j = 999; j > 100; j--) {
            let mul = j * i
            if (isPalin(mul)) {
                arr.push(i*j) 
            }            
        }        
    }
    return Math.max.apply(Math, arr);
    
}
    function isPalin(i){
        return i.toString() == i.toString().split("").reverse().join("");
    }
console.log(palindrom());