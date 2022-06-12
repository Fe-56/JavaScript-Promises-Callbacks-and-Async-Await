// Ice Cream shop example
// Backend: storeroom that stores all the ingredients
// Frontend: kitchen where the ice cream is being produced

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "sprinkles"]
}

// the entire business depends on what a customer orders, and once a customer orders an ice cream, production of the ice cream begins (in the kitchem?)
// customer orders -> fetch ingredients from storeroom -> start production of ice cream in kitchen -> serve the completed ice cream to the customer

/* steps to make an ice creaam (step 2. onwards is production?): 
1. place order (2s)
2. cut the fruit (2s)
3. add water and ice (1s)
4. start the machine (1s)
5. select container (2s)
6. select toppings (3s)
7. serve ice cream (2s)
*/

// arrow functions
// the order function is a callback, as it takes in another function, call_production, as an argument
let order = (fruitIndex, callProduction) => { // where callProduction is an argument that should be a function
    setTimeout(function(){
        console.log(`1. ${stocks.fruits[fruitIndex]} was selected`);
        // order has been placed, so call the production to start
        callProduction();
    }, 2000); // order for 2s (2000ms), step 1.
};

// all these nested callbacks (setTimeout()) are known as callback hell
let production = () => {
    setTimeout(() => {
        console.log("production has started"); // to indicate that the production of the ice cream has started

        setTimeout(() => {
            console.log("2. The fruit has been cut");

            setTimeout(() => {
                console.log(`3. ${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);

                setTimeout(() => {
                    console.log("4. The machine has been started");

                    setTimeout(() => {
                        console.log(`5. ${stocks.holder[0]} has been selected to put the ice cream onto`);

                        setTimeout(() => {
                            console.log(`6. ${stocks.toppings[0]} has been selected as the toppings for the ice cream`);

                            setTimeout(() => {
                                console.log("7. Serve the completed ice cream");
                            }, 2000) // serve the ice cream for 2s (2000ms), step 7.

                        }, 3000) // select the toppings for 3s (3000ms), step 6.

                    }, 2000) // select the container/holder for 2s (2000ms), step 5.

                }, 1000); // start the machine for 1s (1000ms), step 4.

            }, 1000); // add water and ice for 1s (1000ms), step 3.

        }, 2000); // cut the fruit for 2s (2000ms), step 2.

    }, 0);
};

// // not nesting the callbacks (setTimeout()) will simply cause each callback to run on its own (thread?) and possibly mess up the order of things/steps
// let production = () => {
//     setTimeout(() => {
//         console.log("production has started"); // to indicate that the production of the ice cream has started
//     }, 0);

//     setTimeout(() => {
//         console.log("2. The fruit has been cut");
//     }, 2000);

//     setTimeout(() => {
//         console.log(`3. ${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);
//     }, 1000);

//     setTimeout(() => {
//         console.log("4. The machine has been started");
//     }, 1000);

//     setTimeout(() => {
//         console.log(`5. ${stocks.holder[0]} has been selected to put the ice cream onto`);
//     }, 2000);

//     setTimeout(() => {
//         console.log(`6. ${stocks.toppings[0]} has been selected as the toppings for the ice cream`);
//     }, 3000);

//     setTimeout(() => {
//         console.log("7. Serve the completed ice cream");
//     }, 2000);
// };

order(0, production); // trigger for the order, select the fruit at index 0 in stocks.fruits