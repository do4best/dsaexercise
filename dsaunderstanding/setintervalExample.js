// let counter = 0;
// let interval=setInterval(function(){
// console.log("Counter: ",counter);
// counter++;
// if(counter > 5){
//     clearInterval(interval)
// }
// },1000)

function greet(name){
    console.log(`Hello ${name}, My name is ${this.name}`)
}
const person = {name:"Meer"}
greet.call(person,"Maria")