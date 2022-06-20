//promise
posao = new Promise((resolve,rejact)=>{
    Response = 200
    if (Response ===200) {
        resolve([1,2,3,4,5])
    }else{
        rejact("greskaaa!")
    }
})
posao
.then((data)=>{
    console.log("uspesno povukao podate", data);
    arr = data.map(el => el * 2)
    return arr
})
.then((arg1)=>{
    console.log("druga funkc",arg1);
})
.catch((err)=>{
    console.log("neuspesno povuceni podatci",err);
})
.finally(()=>{
    console.log("disati");
})

