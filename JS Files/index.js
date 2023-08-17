//console.log("hello world");


//popup box.
//window.alert("I really like pizza");


/* this is a multiline comment

so you can type anywhere in the code
*/

// let firstName = "Bro";
// let age;
// age = 21;
// age +=4;
// let student = false;

// console.log(firstName);


// document.getElementById("p1").innerHTML = "Hello" + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + "years old";
// document.getElementById("p3").innerHTML = "you are enrolled: " + student;

//Get user input

//easy way

/* let userName = window.prompt("please enter your name");

 document.getElementById("p1").innerHTML = userName;

*/
//harder way

/*

let userName;
document.getElementById("myButton").onclick = function() {

    userName = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = userName;

}

*/

// type conversion

// let age = window.prompt("How old are you?");

// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;

// console.log("Happy birthday - you are", age, "years old!");


//contstants

// const PI = 3.141159;
// let radius;
// let circumference;

// radius = window.prompt("enter the radius of the circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is: ", circumference);

// let x = 5.92

// x = Math.round(x);
// console.log();

// x = Math.floor(x);
// console.log(x);

//  x = 345.67;
// x = Math.ceil(x);
// console.log(x);

// x = -456;
// x= Math.abs(x);
// console.log(x);

// x = Math.floor(Math.random() * 10);
// x = 
// console.log(x);

// let a, b, c;

// a = window.prompt("enter side A");
// a = Number(a);
// b = window.prompt('enter side B');
// b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2);
// c = Math.sqrt(c);

// console.log(c);


// simple counter program
/*
    let count = 0;

    document.getElementById("decreaseButton").onclick = function(){
        count -= 1;
    document.getElementById("countlabel").innerHTML = count;
    }

    document.getElementById("resetButton").onclick = function(){
        count = 0;
        document.getElementById("countlabel").innerHTML = count; 
    }

    document.getElementById("increaseButton").onclick = function(){
        count += 1;
        document.getElementById("countlabel").innerHTML = count;
    }
*/

//generate random numbers using javascript

/*let x, y, z;

document.getElementById("generate").onclick = function(){
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    z = Math.floor(Math.random() * 6 + 1);
    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}
*/
/*
// string manipulation with javascript

let userName = " Justin Scott ";
let phoneNumber = "123-456-789"
console.log(userName);
console.log(userName.length);
console.log(userName.charAt(3)); 

userName = userName.trim();
console.log(userName.indexOf("S"));
console.log(userName.lastIndexOf("t"));
userName = userName.toLowerCase();
console.log(userName);
userName = userName.toUpperCase();
console.log(userName);

// replace characters - with nothing.
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

*/

// slice method - extracts section of a string without modifying the original
/*
let fullName = "slarti blartfast";
let firstName, lastName;

firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
//lastName = fullName.slice(7);

console.log(firstName);
console.log(lastName);


*/

// method chaining - 2/08/2023
// allows multiple methods to be run at the same time.

/*

let firstName = "justin";

firstLetter = firstName.charAt(0).toUpperCase();

console.log(firstLetter);

*/

//if statement 02/08/2023

/*
let age =34;

if (age > 65){
    console.log("You are a senior citizen")
}

else if (age >= 18){
    console.log("You are over 18, an adult");
} 

    else if (age < 0){
    console.log ("error you cannot have an age less than 0")
}
 

    else {
    console.log("you are 18 or younger, still a child");
}

*/

// checking boolean statement for true or false 02/08/2023

/*
let online = true;

if (online){
    console.log("you are online");

} else{
    console.og("you are not online");
}

*/

// creating and checking check boxes 02/08/2023


// const getSubmitBtn = document.getElementById("btnSubmit")
// const myCheckbox = document.getElementById("myCheckBox"); //saving get element to a constant to make it easier to read.
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const payPalBtn = document.getElementById("payPalBtn");

// getSubmitBtn.onclick = function(){



//     if (myCheckbox.checked){
//         console.log("the button is clicked");
//     }

//     else {
//         console.log("the button is not clicked");
//     }

//     if(visaBtn.checked){
//         console.log("visa is selected");
//     }
//     else if(mastercardBtn.checked){
//         console.log("mastercard is selected");
//     }
//     else if(payPalBtn.checked){
//         console.log("payPal is selected");
//     }
//     else {console.log("No playment is selected - you must selecte a payment!")}
// }

// CREATING AND USING A SWITCH STATEMENT 03/08/2023

/*let grade = "F";

switch(grade){
    case "A":
        console.log("You are a champion!");
        break;

    case "B":
        console.log("You did good");
        break;

    case "C":
        console.log("You did ok!");
        break;
    
    default:
        console.log("you are a loser");
        break;
}

grade = 60;

switch(true){
    case grade >= 95:
        console.log("You are a champion!");
        break;

    case grade > 75:
        console.log("You did good");
        break;

    case grade >= 50:
        console.log("You did ok!");
        break;
    
    default:
        console.log("you are a loser");
        break;
}*/

// AND and OR LOGICAL OPERATORS
// && AND - both conditions need to be true
// || OR - either condition can be true

/*
let temp = 11;
let sunny = false;

if (temp > 10 && temp < 30 && sunny) {
    console.log("temp is just right");
}
else if (temp >= 30){
    console.log("temp is too hot!");
}
else {
    console.log("temp is too cold!");
}

let age = 35;
let male = false;

if (age < 50 || male == true) {
    console.log(" you can go to war ");
}
else {
    console.log("you can't go to war");
}
*/

// ! NOT logical operator - use this to reverse to condition's boolean value
// true --> false 4/08/2023

/*
let temp = -1;
let sunny = false;


if (!(temp > 0)){
    console.log("temp not greate than 0");
}
else {
    console.log("temp is greater than 0");
}

if (sunny){
    console.log ("it is sunny")
}

if (!sunny){
    console.log("it is not sunny.")
}
*/

// WHILE LOOP 04/08/2023
//Test before it runs the loop - may never run a loop

/*
let userName = "";

while (userName == "" || userName == null ){
    userName = window.prompt("enter your name");
}
userName = userName.trim();
console.log(userName.length);
console.log("Hello", userName);

*/

// DO WHILE LOOP - do something and then check the condion at the end
// repeat if the condition is true
// always run once.

/*
let userName;

do {
    userName = window.prompt("Please enter your name");
} while (userName == "" || userName == null)

console.log("Hello", userName);
*/

//FOR LOOP - repeat some code a certain number of times 04/08/2023

/*
for(let i = 50; i <= 100; i += 1){
    console.log(i);
}


for(let i = 10; i >= 0; i -= 1){
    console.log(i);
}*/

// BREAK and CONTINUE statements 04 / 08 / 2023
// BREAK - breaks out of a loop entirely
// CONTINUE - skip an iteration of a loop

/*
for( let i = 1; i <= 20; i+=1 ){

    if (i == 13){
        console.log("Stop the bus I want to get off");
        break;
    }

    console.log(i);
}


for( let i = 1; i <= 20; i+=1 ){

    if (i == 13){
        console.log("I will not print 13")
        continue;
    }

    console.log(i);
}
*/

// NESTED LOOPS 04 /08/ 2023

/*

let rows = window.prompt ("Enter # of rows");
let columns = window.prompt ("Enter # of columns");
let count = 0;
for (i = 1; i <= rows; i += 1 ){
    for (j=0; j <= columns; j += 1 ){
        document.getElementById("myRectangle").innerHTML += j;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}

*/

// FUNCTION - 04/08/2023

/*
let userName = window.prompt("Please enter your name");
let age = window.prompt("please enter your age");
happyBirthday(userName, age);
happyBirthday(userName, age);
happyBirthday(userName, age);


 function happyBirthday(name, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", name);
    console.log("Happy birthday to you!");
    console.log();
    console.log("congratulations, you are", age, "years old!")
; }

*/

// RETURN STATEMENT - return stateemnt returns a value back to where you invoked the function.
// 04/08/2023

/*
let area;
let width;
let height;

width = window.prompt("Please enter the width of the rectangle");
height = window.prompt("please enter the height of the rectangle");

area = findRectangleArea(width, height);

console.log("The area of the rectangle is", area);

function findRectangleArea(width, height){
    let area = width * height; // this could also be written as return width * height
    return area;
}

*/

// TERNARY OPERATOR     =   this is a shortcut for an if ... else statement
//                          it takes 3 operands
//
//                          1. a condition with ?
//                          2. expression if true :
//                          3. epression if false

// condition ? expressionIfTrue : expressionIfFalse

/*
let adult = checkAge(32);
console.log (adult);

checkWinner(false);

function checkAge(age){
    return age >= 18 ? true : false;
}


function checkWinner(win){
    win ? console.log("You win!") : console.log("Sorry you lose!");
}
*/

// VARIABLE SCOPE - Where a variable is accesible 4/08/23

//  let = variables are limited to the block scope {}

/*

for (let i = 0; i <= 3; i += 1){
    console.log(i);
    //only access i inside {}
}

//  var = variables are limited to the function (){}
function doSomething(){
    for (var i = 0; i <= 3; i += 1){
        console.log(i);
        //only access i inside {}
    }
}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)
let name = "Bro"; // this is a global variable and can be accessed anywhere better to use this than var to decare it.

var strName = "bro"; // can change window property - we want to avoid this

*/

// TEMPLATE LITERALS - 4/08/23

// template literals  = delimited with (`)
//                      instead of double or single quotes
//                      allows embedded variables and expressions

/*
let userName = "Bro";
let items = 3;
let total = 75;

//instead of writing this
//console.log("Hello", userName);
//console.log("you have", items, "items in your cart");
//console.log("your total is $", total);

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

// you can also use template literals in long strings of text
let text = `Hello ${userName}<br>
            You have ${items} items in your cart<br>
            Your total is $${total} `

// console.log(text);
// it is also good when you want to combine text with html elements
document.getElementById("myLabel").innerHTML = text;
*/

// FORMAT CURRENCY BASED ON LOCALE - toLocaleString() = returns a string with a language sensitive representation

//number.toLocaleString(locale, {options});
/*
let myNum = 100;

//myNum = myNum.toLocaleString("en-US"); Format for US

//options can use style to change how it is dislayed
//myNum = myNum.toLocaleString("en-NZ", {style: "currency", currency: "NZD"}); //for NZ display with $ and rounds 2dp

//Can display number as a percent
//myNum = myNum.toLocaleString(undefined, {style: "percent"});

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
console.log(myNum); 
*/

//NUMBER GUESSING GAME - 5/08/23


/* const answer = Math.floor((Math.random() * 10 + 1));


let guesses = 0;

document.getElementById("submitButton").onclick = function(){

     let guess = document.getElementById("guessField").value;
     guesses += 1;


    if (guess == answer){
        alert(`${answer} is the number, it took you ${guesses} to get it`);
    }

    else if (guess < answer){
        alert(" the number you are look for is higher");
    }
    else {
        alert(' the number you are look for is lower');
    }
} */

// TEMPERATURE CONVERTER 05/08/23
/* 
document.getElementById("submitButton").onclick = function(){
    
    let temp;

    if(document.getElementById("celsius").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp.toFixed(2) + "°C";

       
    }

    else if(document.getElementById("fahrenheit").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahreinheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else {
        document.getElementById("tempLabel").innerHTML = "please select cel or fah";
    }


}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahreinheit(temp){
    return temp * 9 / 5 + 32;
} */

//ARRAYS - 06/08/2023

/*
let fruits = ["apple", "pear", "banana", "orange"];

fruits[1] = "tangerine"; //change a value in an array
fruits.push("lemon"); //add an element
fruits.pop(); //remove last element
fruits.unshift("mango"); //add an element to the start of an array
fruits.shift(); //removes first element from an array.

let length = fruits.length; //finds lenth of the array
let index = fruits.indexOf("apple") // finds index number of item, returns -1 if iten not found.

*/

//LOOPING THROUGH AN ARRAY - 6/08/23
/*
    let prices = [5, 10, 15, 20, 25, 30];

    // two methods to loop through an array

    // option 1 - standard for loop

    for (i = 0; i < prices.length; i +=1){

        console.log(prices[i]);
    }

    // to iterate backwards through the code
    for (i = prices.length - 1; i >= 0; i -=1){

        console.log(prices[i]);
    }

    //option 2 - FOR UP LOOP

    for (let price of prices){
        console.log(price);
    }
*/

// cpt 34 - SORTING AN ARRAY OF STRINGS 6/09/23

/*

    let fruits = ["banana", "mango", "apple", "kiwi", "tangerine", "pear"];

    //fruits = fruits.sort(); - basic sort
    fruits = fruits.sort().reverse(); - sorts in reverse order

    for(let fruit of fruits){
        console.log(fruit);
    }

*/

// cpt 35 - 2D (MULTIDIMENSIONAL ARRAYS) - 06/08/23


/*   let fruits = ["apples", "pears", "tangerines", "bananas"];

  let vegetables = ["potatoes", "corn", "carrots", "brocolli", "onions"];
  let meats = ["beef", "chicken", "fish", "pork"];

  let groceryList = [fruits, vegetables, meats]; //assigns arrays into array

  // to access one of the elements of the array you need 2 indices
  groceryList[0][0] = "starfruit";

  //shows elements of all of the arrays
  for (let list of groceryList){
      for (let food of list){
          console.log(food);
      }
  }
*/

// cpt 36 - SPREAD OPERATOR -   allows an iterable like an array or string to be expanded
//                              in places where 0 or more arguements are expected
//                              (unpacks the element)

/*     let userName = "Justin Scott"
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(...userName);
    console.log(...numbers);

    // how can it be used

    let maximum = Math.max(...numbers);
    console.log(maximum);
 */

// if we wanted to merge to arrays
/* 
    let class1 = ["Spongebob", "Patrick", "Sandy"];
    let class2 = ["Squidward", "Mr Crabs", "Plankton"];

    class1.push(...class2);
    console.log(...class1);
 */

// cpt 37 - REST PARAMETERS =   represents an infinite number 
// ...                          of parameters
//                              (packs arguments into an array);

/*     let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;
    let f = 10;
    let g = 15;

    console.log(sum(a, b, c, d, e, f, g));

    function sum(...numbers){
        let total=0;
        for (let number of numbers){
            total += number;
        }
        return total;
    } */

//cpt 38 - CALLBACKS -  function passed as an arguement to another function
//                      
//                      Ensures that a function is not going to run
//                      before a task is completed.
//                      Helps us develop asynchronous code.
//                      (when one function has to wait for another function).
//                      helps avoid errors and potential problems.

/*
    sum(2, 3, displayDOM); // make sure you don't use the () after displayConsole as it would invoke the function.

    function sum(x, y, callBack){
        let result = x + y;
        callBack(result);

    }

    function displayConsole(output){
        console.log(output);
    }

    function displayDOM(output){
        document.getElementById("myLabel").innerHTML = output;
    }
*/


//cpt 39 - ARRAY.FOREACH() - executes a provided callback function once per array element

/*     
        let students = ["spongebob", 'patrick', 'sandy', 'squidward'];

        //forEach() - has 3 built in parameters - element, index, array
        students.forEach(capitalise);
        students.forEach(print);
    

        function capitalise(element, index, array){
                        array[index] = element[0].toUpperCase() + element.substring(1);
                    
        }

        function print(element){
            console.log(element);
        }
 */

// cpt 40 - array.map() =   executes a provided callback function
//                          once for each array element
//                          AND creates a new array

/*     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let squares = numbers.map(squareNumber);
    let cubes = numbers.map(cube);

    cubes.forEach(print); 

    function squareNumber(element){
        return Math.pow(element, 2);
    }

    function cube(element){
        return Math.pow(element, 3);
    }
    function print(element){
        console.log(element);
    } */

// cpt 41 array.filter() -  creates and array with all the elements
//                          that pass a test provided by a function

/*     let ages = [18, 21, 23, 16, 17, 90, 25];
    let adults= ages.filter(toCheckAge);

    adults.forEach(print);


    function toCheckAge(element){

        return element >= 18;
    }

    function print(element){
        console.log(element);
    } */

//cpt 42 array.reduce() - reduces an array to a single value

//                         useful use for this is to sum up all the elements in an array.
//                         Eg in an online store where we want to sum up all the prices in the cart.

/*     let prices = [54, 10, 25, 34];

    let total = prices.reduce(checkOut);

    console.log(total);


    function checkOut(total, element){
        return total + element;
    } */

// CPT 43 - SORTING AN ARRAY OF NUMBERS

/*     let grades =[45, 34, 21, 87, 09, 56, 43];

    grades = grades.sort(ascendingSort);
    grades.forEach(print);

    function descendingSort(x, y){
        return y - x;
    }

    function ascendingSort(x ,y){
        return x - y;
    }

    function print(element){
        console.log(element);
    } */

// CPT 44 - FUNCTION EXPRESSIONS -  function without a name (anonymous function)
//                                  avoid polluting the global scope with names
//                                  write it and then forget about it.

// we can assign an anonymous function to a variable or const



// counter

// or a function expression and can coded to deal with an action within the javascript
// code without having to name the function.
/* 
    let count = 0;

    document.getElementById("increasebutton").onclick = function(){

        count += 1;
        document.getElementById("myLabel").innerHTML = count;
    }

    document.getElementById("decreasebutton").onclick = function(){

        count -= 1;
        document.getElementById("myLabel").innerHTML = count;
    } 
 */
//CPT 45 - ARROW FUNCTION EXPRESSIONS -  it is a compact alternative to a 
//                                        traditional function expression.

//traditional method

/*     const greeting = function(userName){
        console.log(`hello ${userName}`);
    }

    greeting("Justin");


    // arrow method

    const greeting1 = (userName) => console.log(`Hello ${userName}`);

    greeting1("Nigel");

    // another example of the arrow expression

    const percent = (x, y) => x / y * 100;

    console.log(`${percent(75, 150)}%`); */

// Example using the sort numbers method

/*     let grades =[45, 34, 21, 87, 09, 56, 43];

    //we can do this to simplify the code
            grades.sort((x, y) => y - x);
            grades.forEach(element => console.log(element));

    //traditional function
            /* function descendingSort(x, y){
                return y - x;
            } */

// CPT 46 - SUFFLE AN ARRAY

// EG A CARD GAME

/*     let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];


    shuffle(cards);

    // console.log(cards);
    cards.forEach(card => console.log(card)); 

    function shuffle(array){

            let currentIndex = array.length;
            
            while (currentIndex != 0){
                let randomIndex = Math.floor(Math.random() * array.length);
                currentIndex -= 1;

                let temp = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temp;

            }
            return array;

    }
 */

//CAPT 47 - NESTED FUNCTIONS -  functions inside other functions
//                              Outer functions have access to inner functions
//                              Inner functions are hidden from outside functions
//                              used in closures

// PRACTISE TASK - TO DO LIST
/* 
    let tasks = [];
    let taskInput = document.getElementById("addTask");
    let displayTask = document.getElementById("listTasks");
    let strTasks = "";

    document.getElementById("submitTask").onclick = function(){

        tasks.push(taskInput.value);
        taskInput.value = "";
        console.log(...tasks);

    }

    document.getElementById("displayTasks").onclick = function(){

        tasks.sort();
        tasks.forEach(print);
        displayTask.innerHTML = strTasks;
        
        function print(value, index, array){
            strTasks += index + value + "<br>";
        }
    }

    document.getElementById("btnDeleteTask").onclick = function(){

        tasks.splice(document.getElementById("deleteTask").value, 1);
        tasks.forEach(print);
        displayTask.innerHTML = strTasks;
        
        function print(value, index, array){
            strTasks += index + value + "<br>";
        }

    }
 */
/* 
const GST = 1.15;
let userValue = 100;



//Traditional function declaration
function calcGST(value, GST){

    return Math.round(value * GST);
}

//Function expression
let addGST = function(value, GST){
    
    console.log(`value + GST = $ ${Math.round(value * GST)}`)

}



// arrow function
let arrowGST = (value, GST) => console.log(`value + GST = $ ${Math.round(value * GST)}`);

//Call function declaration
console.log(`value + GST = $${calcGST(userValue, GST)}`)

//call function expression

addGST(35, GST);

//call arrow function
arrowGST(45, GST); */

//CPT 48 - MAPs - object that holds key value pairs of any data type

//add paired objects to a map
/* const store = new Map( [
    ["te-shirt", 20],
    ["Jeans", 30],
    ["Socks", 10],
    ["underwear", 50]
])

//getting the value of the item using get
let shoppingCart = 0;
shoppingCart += store.get("Jeans");
shoppingCart += store.get("Socks");
console.log(shoppingCart); 

//adding a new item to the map
store.set("Hat", 40);

//deleting an item from the map
store.delete("Hat");

//chedks to see the contents of the map
console.log(store.has("Jeans"));
console.log(store.has("Hat"));

//checking the size of the map
console.log(store.size);


store.forEach((value, key) => console.log(`${key} $${value}`)); */

//CPT 49 - OBJECTS - A group of properties and methods
//                   properties = what an object has
//                  methods = what an object can do
//                  use . to access properties / methods.

/* const car = {
        model: "Mustang",
        color: "Red",
        year: 2023,

        drive: function(){
            console.log("You drive the car");
        },

        brake: function(){
            console.log("You step on the breaks");
        }


}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive(); */

// CPT 50 - THIS KEYWORD - reference to a particular object
//                          the object depends on the immediate context

// you can use this to refer to the current window

/* this.name = "my cool window example";
console.log(this);


const car = {
    model: "Mustang",
    color: "Red",
    year: 2023,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    },

    brake: function(){
        console.log("You step on the breaks");
    }


}

const car1 = {
    model: "Honda",
    color: "Blue",
    year: 2022,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    },

    brake: function(){
        console.log("You step on the breaks");
    }


}
//without the this it create a referenceError.
car.drive();
car1.drive(); */


//CPT 51 - CLASSES  =   a blueprint for creating objects
//                      define what properties and methods they have
//                      use a constructor for unique properties

// to define the class
/* class Player {
    score = 0;
    
    pause(){
        console.log("You paused the method");
    }

    exit(){
        console.log("you exited the game");
    }
}

// to implement the class

const player1 = new Player();
const player2 = new Player();

//then to use it you can use the dot notation

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player2.exit();

player1.pause(); // this would then run the pause() method
player1.exit(); // this would exit with the exit() method */

//CPT 52 - CONSTRUCTORS =   a special method of a class,
//                          accepts arguements and assigns properties

/* class Student{

    constructor (name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is  studying`);

    }

}

// create some students based on the class - can use it over and over

const student1 = new Student('Spongebob', 23, 3.4);
const student2 = new Student('Patrick', 24, 1.2);
const student3 = new Student('Squidward', 29, 3.8);

console.log(student1.name, student1.age, student1.gpa); 
console.log(student3.name);
 */

//CPT 53 - STATIC KEYWORD = belongs to the class not the object
//                          properties: useful for caches, fixed-configuration
//                          methods: useful for utility functions


/* class Car {

    static numberOfCars = 0;   // without static each new car would have its on copy of numberOfCars
                        // using static means that the class has the only copy.

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
        // this.numberOfCars += 1; //keeps track of cars that are created
                                // have to use the class name instead of this
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }

}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Farrari");
const car5 = new Car("Porsche")

console.log(Car.numberOfCars); // to display need to use class name not object name

// to invoke a method we need to use the class name and not the object if it static.

// eg cannot go car1.startRace();

Car.startRace();

// an inbuilt example of a static method is the Maths class
// eg Math.round() // this is class of type Math. */

//CPT 54 - INHERITANCE =    a child class can inherit all the methods and properties from
//                          another class.


// these three classes all repeat code eg alive, eat, sleep  - we want to aoid this repetition
// so we can have a class that has the rpeated stuff . And these classes can inherit the information
// from it.

// parent class
/* class Animal {
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

// children class
class Rabbit extends Animal{

    // alive = true; can be eliminated 
    name = "rabbit"; */

// eat(){
//     console.log(`This ${this.name} is eating`);
// }

// sleep(){
//     console.log(`This ${this.name} is sleeping`);
// }
/* 
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{

    
    name = "fish";


    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{

    
    name = "hawk";


    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
 */

// CPT 60 ERROR HANDLING =  object with an description when something goes wrong
//                          cannot open a file
//                          user types in the wrong thing
//                          typeerror

//                          Can you throw keyword to define your own error message.

// eg type error


//console.lag("hello"); //Ive typed .lag instead of .log

//surround any potentially dangerous code with a try block
/* try {
    let x = window.prompt("Enter a number");
    x = Number(x);  // will generate NaN error if string is added instead of text

    console.log(`${x} is a number`); 

    if(isNaN(x)) throw alert("That wasn't a number!");
        
    if(x == "") throw "That string was empty";
}
catch(error) {
    console.log(error);
}
 */

// EXERCISE - STUDENT SCORE DATABASE - ARRAY

/* // defining an array
const fruits = ["apple", "pear", "banana", "peach", "Kiwi"];

// finding the length of an array
console.log(fruits.length);

//to access an individual element in an array you use an index number
console.log(fruits[3]); //index starts 0 so result would be "peach"

//can also update the array by using the index number
fruits[0] = "coconut"; //this replaces apple with coconut



//add an element to the beginning of an array using unshift()
fruits.unshift("apple");

//removes an element from the beginning of an array
fruits.shift();

console.log(fruits);

// Add a value to the end of an array
fruits.push("mango");

//find index of a particular element in array
let index = fruits.indexOf("pear");

//add 2 fruit at index position 2 - the 0 is for it not to delete any
fruits.splice(2, 0, "starfruit", "pineapple");
console.log(fruits);

//delete 2 fruit from an array starting at index number
fruits.splice(2, 2);

console.log(fruits);

// loop through an array - standard for loop
for (let i = 0; i < fruits.length; i += 1){
    console.log(fruits[i]);
} */

/* // loop using a for ... in loop to show content
for (let fruit in fruits) {
    console.log(fruits[fruit]);
} */

// ... spread operator unpacks the array

/* console.log(...fruits); */

// ... spread operator lets you merge an array

/* const veges = ["carrot", "potato", "pea"];
const vegeClone = [...veges];

console.log(veges, vegeClone);

veges[0] = "corn";

console.log(veges, vegeClone);

const moreVeges = ["cabbage", "cauliflower"];

const combinedVeges = [...veges, ...moreVeges];

console.log(combinedVeges); */

// username = val => val + "!";

// console.log(username("steve"));

// const names = [
//     "Tessa",
//     "Charley",
//     "Nigel"
// ]
// alert(names);