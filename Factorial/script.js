const a=9;
let fact = [];
for (var i = a; i > 0 ; i--) {
    fact.push(i);
    var factorial = fact.reduce((a,b)=>{
        return a * b;
    });
}
console.log(factorial);
