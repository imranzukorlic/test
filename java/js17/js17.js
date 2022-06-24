prom = new Promise((resolve, reject) => {
    resolve()    
});

prom.then(() => {
    prom.then(() =>{
        console.log("B");
    })
    console.log("A");
})
prom.then(() => {
    console.log("C");
});

//klouzer skoup i hojsting  === nauci


// const getUser = () =>{                    //trazeno  /id /sta iz tog id
//     // fetch('https://jsonplaceholder.typicode.com/users')  //  nakon .com dodajemo / i sta trazimo
//     // .then((response) => response.json())
//     // .then(res => res.map((el) => el.id))
// };
// console.log(getUser());

//Query Param(S) // ? & kad preciziramo sta trazi (samo jedno se koristi ? a posle &)
const BASE_URL = "https://jsonplaceholder.typicode.com"

const getUser = async () =>{
    const response = await fetch(`${BASE_URL}/users`)
    const posts = await response.json();
    return posts.map(el => el.id)
};

getUser().then((res)=> console.log(res))