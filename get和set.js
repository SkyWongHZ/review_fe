// let obj={
//     _name:'jack',   
//     get name(){     
//         return this._name
//     },
//     set name(val){     
//         if(val.length<4){
//             console.log('太短了');
//             return 
//         }
//         this._name=val
//     }   
// }
// console.log(obj.name); 
// obj.name='rose';
// console.log(obj.name);

// obj.name='a'; //太短了
// console.log(obj.name);

class   Person{
    constructor(name){
        this._name=name
    }
    get  name(){     
        return this._name
    }
    set name(val){
        if(val.length<4){
            console.log('太短了');
            return 
        }
        this._name=val  
    }
}

let  p1=new Person('jack');
console.log(p1.name);
p1.name='rose';
console.log(p1.name);
p1.name='a'; //太短了
console.log(p1.name);