function greet(name,callback){
  console.log('hello' + name);
  callback();
}

function saygoodbye(){
    console.log('goodbye');
}


greet('alice',saygoodbye);


// not a callback fun

// function add(a,b){
//   let c=a+b;
//   console.log(c);
// }

// add(2,3);



function add(a, b, callback) {
  let c = a + b;
  callback(c);
}

function printResult(result) {
  console.log(result);
}

add(2, 3, printResult);
