function mojaFunc() {
    console.log("neki posao");
    console.log("neki posao");
    console.log("neki posao");
    function druga() {
        console.log("drugaaaaa");
    }
    return druga
}
// mojaFunc()()
res = mojaFunc()  //istto
res()

function makeAdder(x) {
    return function  (y) {
        return x+y
    }
}
var add5 = makeAdder(5)
var add10 = makeAdder(10)
console.log(add5(3));
console.log(add10(9));
//console.log(makeAdder(5)(12));    //moze da se oako lakse
