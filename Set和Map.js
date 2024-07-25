// let set=new Set(['red','green','blue'])

// for (let item of set.keys()){
//     console.log(item);
// }


let arr=[3,5,2,,5,3]
const  newArr=[...new Set(arr)]
console.log(newArr); // [3,5,2,undefined]