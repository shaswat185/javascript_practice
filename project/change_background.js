const button = document.querySelectorAll('.button');
const body = document.querySelector('body');


button.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id=='grey'){
            body.style.background=e.target.id;
        }
        if(e.target.id=='white'){
            body.style.background=e.target.id;
        }
        if(e.target.id=='red'){
            body.style.background=e.target.id;
        }
        if(e.target.id=='purple'){
            body.style.background=e.target.id;
        }
    })
})




// button.forEach(function(button){
//     button.addEventListener('click',function(e){
//         switch(e.target.id) {
//             case 'grey':
//             case 'white':
//             case 'red':
//             case 'purple':
//                 body.style.background = e.target.id;
//                 break;
//             default:
//                 // Handle default case if needed
//                 break;
//         }
//     });
// });
