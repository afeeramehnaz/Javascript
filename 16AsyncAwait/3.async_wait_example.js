
async function call2(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("call2");
            },3000);

    });   
}


async function call1(){
    console.log("Inside my call 1"); 
    const result=await call2();
    console.log("result from call 2 is :",result); 
}

call1();