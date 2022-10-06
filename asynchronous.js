let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cutting the fruit");

    await time(1000);
    console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were added`);

    await time(1000);
    console.log("machine started");

    await time(2000);
    console.log(`${stocks.Holder[1]} was selected as container`);

    await time(3000);
    console.log(`${stocks.Toppings[1]} was selected as toppings`);

    await time(2000);
    console.log("Serving the ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();
