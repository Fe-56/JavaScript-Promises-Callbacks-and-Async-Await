// ice cream example, but with async/await

// the await keyword makes JavaScript wait until a promise settles and returns its results

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "sprinkles"]
}

function toppings_choice (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve( console.log("Which topping would you love to have?"))
        }, 3000);
    })
}
  
async function kitchen(){ // to make ice cream
    try{
        await time(2000);
        console.log(`1. ${stocks.fruits[0]} was selected`);

        await time(0);
        console.log("~~~ Production has started ~~~");

        await time(2000);
        console.log("2. The fruit has been cut");

        await time(1000);
        console.log(`3. ${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);

        await time(1000);
        console.log("4. The machine has been started");

        await time(2000);
        console.log(`5. ${stocks.holder[0]} has been selected to put the ice cream onto`);

        await time(3000);
        console.log(`6. ${stocks.toppings[0]} has been selected as the toppings for the ice cream`);

        await time(2000);
        console.log("7. Serve the completed ice cream");
    }

    catch (error){
        console.log("~~~ Customer left ~~~", error);
    }

    finally{
        console.log("~~~ The day has ended, shop is closed");
    }
}

function time(ms){ // to assign the amount of time each small task/step will take
    return new Promise((resolve, reject) => {
        if (isShopOpen){
            setTimeout(resolve, ms);
        }
        
        else{
            reject(console.log("The shop is closed!"));
        }
    })
}

let isShopOpen = true;
// let isShopOpen = false;

  // Trigger the function
kitchen();  