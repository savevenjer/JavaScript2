const people = ["Aaron" , "Mel" , "John"];
const one = 1; 
const str = "Hello World";
const b = true;
const employee = {
    firstname: "Supawich",
    lastname: "Peantanyakorn",
};

function SayHello(person){
    console.log("Hello" + person.firstname);
}

console.log(typeof people);
console.log(typeof SayHello);
console.log(employee instanceof Array);
SayHello(employee);