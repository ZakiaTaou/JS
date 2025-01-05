let promise = new Promise((resolve, reject) => {
    let time = 2000;
    if(time === 2000){
        setTimeout(()=>{
            resolve("Promise resolved!");
        }, time);
    }
    else{
        reject("Promise rejected!");
    }
})
promise.then(result=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})