// Javascript Basics
//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = == = ==  = = = = = 
// Use console.log() to print messgae to console.
console.log ("Hello,World! Let's learn some Javascript");

//------------------------------------------------------------------------
//1. VARIABLE DECLARATION
//------------------------------------------------------------------------
//Variables are like containers for storing data values.

//'Let'is used for variables whose value can change.
let age = 25;
console.log("Initial age:" ,age);//output : Initial age:25
age = 26; //The Value can be updated.
console.log("Updated age:",age);//output : Updated age:26

//'const' is used for constants ,whose value cannot be changed once assigned.
const birthyear = 1999 ;
console.log("Birth Year:" , birthyear);//output : Birth year:1999
//birthyear=2000;//This line would cause an error!Uncomment to see.

console.log("Player score:,score");//output: Player score:100
console.log("/n---End of Variable Declaration---/n");

//2.DATA TYPES
//---------------------------------------------------------------------
//Javascript has several built-in data types.
//string:Textual data,ennclosed in quotes.
const name = "Alice";
console.log("Name(String):",name);
//Number:Integers or floating-point numbers.
let accountbalance = 150.75;
console.log("Balance (Number):",accountbalance);

//Boolean:Represents true or false.
let isactive = true;
console.log("Is Active? (Boolean):" , isactive);

// Object: A Collection of key-value pairs.
const person = {
    firstname : "John",
    lastName : "Doe",
    age : 30
};
console.log("Person (Object):", person)
console.log("Person's first name:", person.firstname);
//Access properties with dot notation

// 3.ARTHIMETIC OPERATIONS
//---------------------------------------------------------------------------
//Used to perform mathematical calculations.

let a = 10;
let b = 5;

console.log("a + b =", a + b);// Addition : 15
console.log("a - b =", a - b);//Subtraction : 5
console.log("a * b =", a * b);//Multiplication :50
console.log("a / b =", a / b);// Division:2
console.log("a % b =", a % b);//Modulus (remainder of division):0

//Increment and Decrement 
a++; // a = a + 1
console.log("a after increment:", a); //11
b--; // b = b-1
console.log("b after decrement:", b);//4
console.log("/n--- End of Arthimetic Operators---/n");

//4.LOGICAL OPERATORS
//Used to combine or invert boolean values

let isSunny = true;
let isWarm = false;

// AND (&&) : Both conditions must be true
console.log("Is it a good day for the beach? (isSunny && isWarm):",isSunny && isWarm);//false

//NOT (!):Inverts the boolean value.
console.log("Is it NOT sunny? (!isSunny):", !isSunny);
console.log("/n--- End of Logical Operators---/n");

//5.CONTROL FLOW STATEMENTS
//-----------------------------------------------------------------
//Used to make decisions in your code.

//if,else if,else
let temperature = 22;

if (temperature > 30){
    console.log("It's a hot day!");
}else if (temperature > 20){
    console.log("It,s a pleasent day.");//this block will run.
} else {
    console.log("It's a cold day.");
}
//switch statement (an alternative to long if-else chains)
let day = "Monday";

//6. LOOPS
//---------------------------------------------------------------------
//Used to repeat a block of code multiple times .

//for loop:Repeats a specific number of times.
console.log("Starting for loop...");
for(let i = 1; i <= 5; i++){
    console.log("Count:",i);
}

//Output will be:
//Count : 1
//Count : 2
//Count : 3
//Count : 4
//Count : 5

//while loop:Repeats as long as condition is true.
console.log("/nStarting while loop...");
let countdown = 3;
while (countdown > 0){
    console.log("Countdown:",countdown);
    countdown--;// This is important to avoid an infinite loop!
}
console.log("Start!");