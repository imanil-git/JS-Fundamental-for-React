//Asynchronos and Synchronos function
function getCheese(cb) {
  setTimeout(() => {
    const cheese = "CHEESE";
    return cb(cheese);
  }, 2000);
}
function getDough(cb) {
  setTimeout(() => {
    const dough = "DOUGH";
    return cb(dough);
  }, 5000);
}
function bakePizza(cheese, dough, cb) {
  setTimeout(() => {
    const pizza = `${cheese} & ${dough}`;
    return cb(pizza);
  }, 3000);
}


//IF code goes in lot of loop then callback hell or pyramid of doom is created to handle this problem promis is created.
getCheese((cheese) => {
  console.log(`I get: ${cheese}`);
  getDough((dough) => {
    console.log(`I get: ${dough}`);
    bakePizza(cheese, dough, (pizza) => {
      console.log(`Finally your CHI PIZZA with ${pizza} is ready`);
    });
  });
});
