 function prvi() {
    let unos = prompt("unesi broj")
    let rezultat = unos * unos
    console.log(`The pow of ${unos} is ${rezultat}`);
}
prvi()

///

 function drugi() {
    const CART_DATA = [
        {
          id: 1,
          name: "Hawai Shirt",
          price: 30,
          amount: 2,
          categorty: "summer",
          rating: 4.5,
        },
        {
          id: 3,
          name: "Adidas Slippers",
          price: 35,
          amount: 1,
          categorty: "summer",
          rating: 4.5,
        },
        {
          id: 6,
          name: "White T-Shirt",
          price: 15,
          amount: 4,
          categorty: "summer",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Summer hat",
          price: 7.5,
          amount: 3,
          categorty: "summer",
          rating: 40,
        },
      ];
      const numOf = CART_DATA.map(el=> el.amount).reduce((a,b)=>a+b)
    
     const frst = CART_DATA.map(el => {
        return{
            name: el.name,
            total: el.price * el.amount
        }
     })
     const potr = frst.map(el=> el.total)
     const shippingCosts = 320
     const sec = potr.reduce((a,b)=> 
        a+b,shippingCosts
     )
     console.log(`You got ${numOf} in cart,shipping cost is ${shippingCosts}, your total is ${sec}`);
 }
 drugi()


 
const nesto = async() =>{
        const neko = await fetch('https://reqres.in/api/users')
        const opet = await neko.json()
        return opet
}
nesto().then(el=>console.log(el.data))