//Promis 
//IT handle callback hell or pyramid of doom 
function getCheese(){
    return new Promise((relsove, reject)=> {  //1st argument takes Sucess value and 2nd takes error value
        setTimeout(()=>{
            const cheese = "CHEESE";
            relsove (cheese);
        },1000)
    })
}

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
            const pizza = `${cheeseAndDough}`;
            reslove (pizza);
        },3000)
    });
}

getCheese().then((cheese) =>{ //positive value is handle by then 
    console.log(`I get: ${cheese}`);
    return getDough(cheese);
}).then((doughAndChees)=> {
    console.log(`I get: ${doughAndChees}`);
    return makePizza(doughAndChees);
}).then((pizza)=> {
    console.log(`Your Pizza with ${pizza} is ready`);
}).catch(()=>{   //negative value by catch
    console.log('Sorry Error Occured');
})