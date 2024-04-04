const person = {
    name: "Anil",
    walk() {
        console.log(this);
    }
};

person.walk();

// const walk = person.walk;
// walk();   //standalone function  outside of an object this by default returns a reference to global object which is window object
const walk = person.walk.bind(person);
walk();