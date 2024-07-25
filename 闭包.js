function fn(){
    let a=10
    function f(){
        console.log(a++);
    }
    return f
}

let f1=fn()()
console.log(f1);