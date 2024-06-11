let users = {
    getFullname: function () {
        return this.name + " " + this.lastname
    },
    getage() {
        let age = new Date().getFullYear() - this.birth;
        return age;
    }
}
 
Object.prototype.newdata=function(){
        return 'hello'
}
// access ==== 
        // create a object g={}
        // g.newdata


        
Object.prototype.str='this is a string';
// access      =====  'hello'.str

String.prototype.cusLength



let teacher = {
    name: 'jaipal',
    lastname: 'sharma',
    birth: 1990,
    // getage:users.getage
  
}


let student = {
    name: 'anil',
    lastname: 'sidhu',
    birth: 2000,
    // getage:users.getage

   
}


teacher.__proto__=users;
student.__proto__=users;


console.log(teacher.getage())
console.log(student.getage())

// console.log(teacher)
// console.log(student)