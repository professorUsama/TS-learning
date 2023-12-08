// type inference

// Explicitly specifying types
let num: number = 10;
let text: string = "Hello, TypeScript";

// Type inference
let inferredNum = 10; // TypeScript infers the type as number
let inferredText = "Hello, TypeScript"; // TypeScript infers the type as string


// Type inference with functions
function add(a: number, b: number) {
    return a + b; // TypeScript infers the return type as number
  }
  
  // Type inference with arrays
  let numbers = [1, 2, 3]; // TypeScript infers the type as number[]
  
  // Type inference with objects
  let person = { name: "John", age: 30 }; // TypeScript infers the type as { name: string, age: number }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// using any in TS


// let someThing: any;
let someThing; // When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any

// if we use any type in code. then we can assign number, string, etc. it means that you can use whenever you don’t want a particular value to cause typechecking errors.
// it means disable type checking in TS-code

function getSomeThing(){
    return "don't use any"
}

someThing = getSomeThing()
// console.log(someThing);

// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// functions in TS

// When you declare a function, you can add type annotations after each parameter to declare what types 
// of parameters the function accepts. Parameter type annotations go after the parameter name:
function adder(n1: number, n2: number){
    return n1 + n2;
}

// When a parameter has a type annotation, arguments to that function will be checked:
// Would be a runtime error if executed!
// console.log(add("professor", "usama")); type will be check at a runtime

console.log(adder(10, 5));


// Return Type Annotations
// the function when return someting like string, boolean, object/arrays, number or nothing, 
// then we need to add return type annotations and it is a best practice

// as we can see that this function return something. now we can identify what is the type of return value
// the return type of return value is string; so type annotation will be string
function greet(msg: string): string{
    return msg;
}

const msg = greet("Good Morning!") // here const msg automatically set type string. its type inference.
// console.log(msg);

// return type will be boolean
function isPositive(number: number): boolean{
    return number > 0;
}

// console.log(isPositive(-1));

// promises function return type

// If you want to annotate the return type of a function which returns a promise, you should use the Promise type:

async function getFvtName(): Promise<string>{
    return "Professor";
}

const fvtName = getFvtName(); // when we hove on function name, then we can see return type
// console.log(fvtName);

// Anonymous Functions

// contextual typing
// Anonymous functions are a little bit different from function declarations.
// Here’s an example:

const programmingLanguagesName = ['JavaScript', 'TypeScript', 'Python'];
// Contextual typing for function - parameter s inferred to have type string
programmingLanguagesName.forEach(function(nameInString){
    // console.log(nameInString.toUpperCase());
});

// Contextual typing also applies to arrow functions
programmingLanguagesName.forEach((names) =>{
    // console.log(names.toLowerCase());
});

// Even though the parameter 'nameInString' and 'names' didn’t have a type annotation, TypeScript used the types of 
// the forEach function, along with the inferred type of the array, to determine the type s will have.
// This process is called contextual typing because the context that the function occurred within informs what type 
// it should have.

// Object Types
// here’s a function that takes a point-like object:
function mergeName(name: {firstName: string; lastName: string}){
    console.log(`${name.firstName} ${name.lastName}`);
}
mergeName({firstName: "usama", lastName: "amjid"});

// Here, we annotated the parameter with a type with two properties name and lastName which are both of type number. 
// You can use , or ; to separate the properties, and the last separator is optional either way.
// The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any.
// and its not a good practice to use any

// Optional Properties

// Object types can also specify that some or all of their properties are optional. To do this, add a ? 
// after the property name:

function printName(obj: {first: string; last?: string}){
    if(!obj.last) {
        console.log(`${obj.first}`)
    } else {
        console.log(`${obj.first} ${obj.last}`)
    }
}

// both accept
// printName({first: "professor"});
printName({first: "professor", last: "usama"});

// In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. 
// Because of this, when you read from an optional property, you’ll have to check for undefined before using it



// Union Types

// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.

// Defining a Union Type

// A union type is a type formed from two or more other types

function namePrint(namee: number | string){
    // console.log(namee.toUpperCase()); 
    // error: Property 'toUpperCase' does not exist on type 'string | number'.
        // Property 'toUpperCase' does not exist on type 'number'.
    
    // how can solve this 
    if(typeof namee === 'string'){
        console.log(namee.toUpperCase()); // now fix error
    }
    // if number
    console.log(namee);
}

// namePrint(123) // ok
// namePrint("usama") // ok





