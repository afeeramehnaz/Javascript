

function checking()
{
    console.log("checking inside a function");
}
//arrow functions
const hello =() =>{
    console.log("arrow function");
}

const sum=(p,q)=>{
    return p+q;
}

let sub=function(p,q){
    return p-q;
};




checking();
hello();
console.log(sum(2,4));
console.log(sub(2,4));
