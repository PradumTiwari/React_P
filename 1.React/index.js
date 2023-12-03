// const radius=[3,1,2,4];

// const area=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// console.log(area(radius));


// const circum=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }
// console.log(circum(radius))




// const diameter=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(2*radius[i]);
//     }
//     return output;
// }
// console.log(diameter(radius))



const area=(radius)=>{
    return Math.PI*radius*radius;
}

const circum=(radius)=>{
    return 2*Math.PI*radius;
}

const diameter=(radius)=>{
    return 2*radius;
}

const radius=[2,1,3,4];
 

// Array.prototype.calculate=(radius,logic)=>{
//     const output=[];

//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

Array.prototype.calculate=(logic)=>{
    const output=[];

    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
// console.log(calculate(radius,area));



console.log(radius.map(area));


console.log(radius.calculate(area))




// Now for calling directly we have to add Array.prototype




//Array reduce

const arr=[1,2,3,4,5];

const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0)

console.log(output);


const user=[
    {user:"Pradum Tiwari",age:21,Gender:"Male"},
    {user:"Ravi Yadav",age:22,Gender:"Male"},
    {user:"Chand Kumar",age:22,Gender:"Male"}
]


const cart=[1,2,3];



const output1=user.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{})

console.log(output1);


const age=user.filter((x)=>{
    return x.age>20;
})

console.log(age);



const promise=createOrder(cart);

function createOrder(cart){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({orderId:1234});
        },2000);
    })
    return promise;
}

promise.then((orderid)=>{
    console.log(orderid);
    return orderid;
})

