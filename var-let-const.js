//var ->function
//let ->block     can be reassigned
//const ->block     cannot be reassigned

function sayHello(){
    for (var i = 0 ; i < 5 ; i++ ){   //var works only in given function so react.js develop let to slove this problem
        console.log(i)
    }
    console.log(i);
}

sayHello();

const x=1;
x=2;

