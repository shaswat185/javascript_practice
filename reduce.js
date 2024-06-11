const data1=[1,2,3,4,5,6,7,8,9];
const data2=data1.reduce((prev,curr)=>{
    return prev+curr;
})

console.log(data2)