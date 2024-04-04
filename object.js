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

const person = {
    name: 'Anil',
    greet() {
        console.log('Hello Anil');
    },
    order() {
        console.log('Your pizza is ready')
    },
};

console.log(person);
person.greet();
person.order();
person.name = 'Rai';     //changes the variable
console.log(person);
console.log(person.name);

//hints
const targetMember = 'name';
person[targetMember.value] = 'name';