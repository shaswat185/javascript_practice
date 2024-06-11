function outfun(p) {
    let a = 10;
    // console.log(a)
    function innfun() {
        // let a = 20;
        let sum = p + a;
        console.log(sum);
    }
    innfun();
}

outfun(10);


// const outfun = (p) => {
//     let a = 10;
//     const innfun = () => {
//         let sum = p + a;
//         console.log(sum);
//     }
//     innfun();
// }

// outfun(10); 


