//OBJECTS
let name = 'Anil';
let age=23;
let person = {
    name : 'Anil',
    age : 23
}

//Dot Notation
person.name = 'Simran';

//Bracket Notation
person['name'] = 'Simran Stha';

let selection = 'name';

person[selection] = 'SIMRAN';

console.log(person.name); //Just gives name
console.log(person); //Provides whole name

//ARRAY
let selectedColors = ['Red','Blue']
selectedColors[2] = 'Green';
console.log(selectedColors);
console.log(selectedColors.length);

//Function
//Performing Task
function greet(firstName,lastName){
    console.log('Hello ' + firstName + ' ' + lastName);
}

greet('Anil','Rai');

//Types of Function
//Calculating Function
function square(number){
    return number*number;
}
console.log(square(2));