setTimeout(console.log('hello'),2000);


setTimeout(function () {
    console.log('hello');
},2000);



function getmilk(){
    setTimeout(()=>{
        let milk = '1l'
        console.log(milk);
    },5000)
};

getmilk()


setTimeout(()=>{
    let a=20;
    console.log(a)
},2000)




