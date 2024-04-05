//Ascynchronous Await Function

function getCheese(){
    return new Promise ((reslove, reject) => {
        setTimeout(() => {
            const cheese = "Here your cheese is served";
            reslove (cheese);
        },5000);
    });
};

function getDough(cheese){
    return new Promise((relsove, reject)=>{
        setTimeout(()=>{
            const doughAndCheese = `DOUGH & ${cheese}`;
            relsove (doughAndCheese)
        }, 2000)
    })
}

function makePizza(cheeseAndDough){
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            const pizza = `Pizza as you asked with ${cheeseAndDough}`;
            reslove (pizza);
        },3000)
    });
}

async function preparePizza(){
    const cheese = await getCheese();
    const dough = await getDough(cheese);
    const pizza = await makePizza(dough);
    console.log(pizza);
}

preparePizza();