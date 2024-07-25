class person{

}

const  p1=new person()

console.log(person.prototype===p1.__proto__); //true
console.log(person===person.prototype.constructor); //true
console.log(person.__proto__===Function.prototype); //true

console.log(person.__proto__.__proto__.__proto__); 