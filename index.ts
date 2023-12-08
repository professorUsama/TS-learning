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
console.log(someThing);

// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


