console.log("I");

// This will be shown after 2 seconds
// This is a callnback, where it is basically when a function is nested inside another function as an argument
// Callbacks are used whenever we are doing complex tasks and we want to break the task down into smaller steps
// It is also to help us establish a relationship between these steps according to time (optional) abnd order

setTimeout(() => {
    console.log("eat")
}, 2000);

setTimeout(printEat, 2000);

console.log("Ice Cream");

// function printEat(){
//     console.log("eat");
// }