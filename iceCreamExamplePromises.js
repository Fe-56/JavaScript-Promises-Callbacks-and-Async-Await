// ice cream example, but with promises, hence avoiding the callback hell as seen in iceCreamExample.js

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "sprinkles"]
}

let isShopOpen = true; // so that the promise results in a resolve?
// let isShopOpen = false; // so that the promise results in a reject?

let order = (time, work) => {
    // time is the amount of time it takes to do a particular work (?), where work is a function

    // make a promise to the customer: "we will serve you ice cream"
    // reseolved is when the ice cream is produced and served to the customer 
        // a resolve promise has .then, where the .then handler returns a promise when the original is resolved
    // rejected is when the ice cream is not served to the customer/customer did not get the ice cream
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work()); // the work is getting done here in the stipulated time
            }, time);
        }

        else{ // if the shop is not even open, then it is impossible to serve the ice cream to the customer!
            reject(console.log("The ice cream shop is closed!")); // a callback?
        }
    });
};

// initiate the ice cream order
// because the order() function returns a promise, you can use .then()
order(2000, () => { // step 1., the original promise?
    console.log(`1. ${stocks.fruits[0]} was selected`);
})
.then(() => { // if the promise is resolved
    return order(0, () => {
        console.log("~~~ Production has started ~~~");
    })
.then(() => { // step 2.
    return order(2000, () => {
        console.log("2. The fruit has been cut");
    });
    })
.then(() => { // step 3.
    return order(1000, () => {
        console.log(`3. ${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);
    });
    })
.then(() => { // step 4.
    return order(1000, () => { 
        console.log("4. The machine has been started");
    });
    })
.then(() => { // step 5.
    return order(2000, () => {
        console.log(`5. ${stocks.holder[0]} has been selected to put the ice cream onto`);
    });
    })
.then(() => { // step 6.
    return order(3000, () => {
        console.log(`6. ${stocks.toppings[0]} has been selected as the toppings for the ice cream`);
    });
    })
.then(() => { // step 7.
    return order(2000, () => {
        console.log("7. Serve the completed ice cream");
    });
});
})
.catch(() => { // if the promise is rejected
    console.log("Customer left")
})
.finally(() => { // executes no matter whether the promise is rejected or resolved
    console.log("~~~ End of day, store closed ~~~");
});