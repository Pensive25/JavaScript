//ALERT, PROMPT, CONFIRM
    // alert("Hello, welcome to JavaScript!")
    // alert("This is an alert box!")
    // alert("Hello");


    // let age = prompt("how old are you?");
    // alert(`You are ${result} years old!`);

    // let isBoss = confirm("Are you the boss?");

    // alert( isBoss ); // true if OK is pressed

    // alert(2+'1'+2)
    // let login = prompt("Enter your login:");
    //   let message = (login == 'Employee') ? 'Hello' :
    //   (login == 'Director') ? 'Greetings' :
    //   (login == '') ? 'No login' :
    //   '';
                
    //     alert(message); 

    // alert( 2  || alert(1) || alert(3) );

    // alert( alert(1) && alert(2) );

    // true || alert("not printed");
    // false || alert("printed");

    // let age=prompt("What is your age?");
    // if (age>=14 && age<=90 ){
    //     alert("Your age is between 14 and 90");

    // }else{
    //     alert("Your age is not between 14 and 90");
    // }


    // let age=prompt("What is your age?");
    // if (!(age>=14 && age<=90) ){
    //     alert("Your age is not between 14 and 90");
    // }else{
    //     alert("Your age is between 14 and 90");
    // }

    // let age=prompt("What is your age?");
    // let message=(age<14 || age>90) ? "Your age is not between 14 and 90" : "Your age is between 14 and 90";
    // alert (message);


    // let login=prompt("Who's there?");
    // if (login==="Admin"){
    //     let password=prompt("Password?");

    //     if (password==="TheMaster"){
    //         alert("Welcome!");
    //     }
    //     else if (password===""||password===null){
    //         alert("Canceled");
    //     }
    //     else{
    //         alert("Wrong password");
    //     }
        
    // }
    // else if (login===""||login===null){
    //     alert("Canceled");
    // }
    // else{
    //     alert("I don't know you");
    // }

    // let sum = 0;

    // while (true){

    //   let value = +prompt("Enter a number", '');

    //   if (!value) break; 

    //   sum += value;

    // }
    // alert( 'Sum: ' + sum );

    // for (let i = 0; i < 3; i++) {

    //   for (let j = 0; j < 3; j++) {

    //     let input = prompt(`Value at coords (${i},${j})`, '');

    //     // what if we want to exit from here to Done (below)?
    //   }
    // }

    // alert('Done!');

    // outer: for (let i = 0; i < 3; i++) {

    //   for (let j = 0; j < 3; j++) {

    //     let input = prompt(`Value at coords (${i},${j})`, '');

    //     // if an empty string or canceled, then break out of both loops
    //     if (!input) break outer; // (*)

    //     // do something with the value...
    //   }
    // }

    // alert('Done!');


    // let input=prompt("Enter a number greater than 100","");
    // while (input<=100 || input==="" || input==null){
    //     input=prompt("Enter a number greater than 100","");
    //     if (input>100){
    //         break;
    //     }

    // }
    // alert("You entered: "+input);


    // switch (browser) {
    //   case 'Edge':
    //     alert( "You've got the Edge!" );
    //     break;


    // let browser=prompt("Enter your browser name","");

    // if (browser==="Edge"){
    //     alert( "You've got the Edge!" );
    // }
    // else if (browser==="Chrome"||browser==="Firefox"||browser==="Safari"||browser==="Opera"){
    //     alert( 'Okay we support these browsers too' );
    // }
    // else{
    //     alert( 'We hope that this page looks ok!' );
    // }


//     let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a= +prompt('a?', '');

// switch (a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;  
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }


// alert(checkAge(+prompt("Enter your age","")))

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }
// alert(checkAge(+prompt("Enter your age","")))



// function min(a,b){
//     let result=(a<b) ? a : b;
//     return result;
// }
// let mini=min((+prompt("Enter first number","")), (+prompt("Enter second number","")))

// alert(mini)


// function pow(x,n){
//     let power=x**n;
//     return alert(` Answer for ${x} exponential ${n} is :${power}`);
// }

// let x=+prompt("Enter base number","")
// let n=+prompt("Enter exponent number","")

// if(n>=1){
//     pow(x,n)
// }
// else{
//     alert("Exponent should be a natural number greater than 1")



// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );


// let ask=(question, yes, no) => (confirm(question))? yes() : no();

// let response= ask("Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );  

// showPrimes(20);

// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }


//OBJECT
// let user={
//     name:"John",
//     age:30,
//     isAdmin:true

// }
// // alert("name" in user);
//  user.faculty="Engineering";
// for( key in user){
//     alert(key);

//     alert(user[key]);

// }


// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// // take property name from the fruit variable
// bag[fruit] = 5;

// alert( bag.apple ); // 5 if fruit="apple"


// let codes = {
//   49: "Germany",
//   5: "Switzerland",
//   6: "Great Britain",
  
//   "+1": "USA"
// };

// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user={};

// user.name="John";
// alert(user.name);
// user.surname="Smith";
// user.name="Pete";
// alert(user.name);
// delete user.name;

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); 

// let schedule = {};


// function isEmpty(schedule){

//     for (let key in schedule){

//         return false; // if the loop has started, there is a property
// }
//     return true;
// }

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // true


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }



// let sum=0;
// for (let key in salaries){
//     sum+=salaries[key];
// }
// alert(sum);

// let target={
//     a:1,
//     b:2,
// }

// let source={ 
//     b:5,
//     c:3,

//   }

//   Object.assign(target,source);

//  for( let key in target){
//     alert(key+" : "+target[key]);
//  }

//Nested objects

// let user ={
//   name:"John",
//   age:30,

//   sayHi(){
//     alert(this.name)

//     // alert(this.age)

// }
// }

// let admin =user;
// user=null;
// admin.sayHi();



// function makeUser() {
//   return {
//     name: "John",
//     ref(){
//         return this 
//     } 
//   };
// }

// let user = makeUser();

// alert( user.ref().name );


// let calculator={

//   read(){
//      this.a= +prompt("Enter first number","");
//       this.b= +prompt("Enter second number","");

//   },

//   sum(){

//     let result=this.a + this.b;
//     return result;

//     },

//   mul(){
//       let result1 =this.a * this.b;
//       return result1;
//   },

// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


//CONSUCTROR FUNCTION

// function Accumulator(startingvalue) {
  
//   this.value= startingvalue;
//   this.read= function() {
//     this.value += +prompt("Enter a number to add:", 0);
//   };

// }

// let accumulator= new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// let obj={
//   a:1,
//   b:2,
//   c:"hello"

// };
// // alert(obj);
// let anotherObj={};

// // using object as a property key

// // alert(obj)
// anotherObj[obj.c] = 1
// console.log(anotherObj);
// // alert(anotherObj["[object Object]"]); // 1

// let total = obj + anotherObj;

// // if (user == 1) { ... };

// console.log(total);
// // alert(total);



// let array=[1,2,3,4];

// let result= array.at(-1);

// let result1= array[array.length-2];


// for(let i=-3; i<array.length;i++){
// let result2= array.at(i);
// console.log(result2);
// }

// // console.log(result);
// // console.log(result1);


// let fruits = []; 

// fruits[99999] = 5;
// fruits.age = 25

// console.log(fruits.length);
// console.log(fruits.age);    
// console.log(fruits);

// let arr = new Array("Apple", "Pear", "etc");

// console.log(arr);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for(i=0;i<matrix.length;i++){
//   for(j=0;j<matrix[i].length;j++){
//     console.log(matrix[i][j]);
//   }
// }

// let styles=["Jazz","Blues","HardR-ock"];

// styles.push("Rock-n-Roll");

// console.log(styles);

// styles[Math.floor((styles.length-1)/2)]="Classics"

// console.log(styles);

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// });

// arr[2]();

// for(let i=0 ;; i++) {

// let array= [i];

// if (!array) {
// array.push(prompt("Enter numeric value and enter non numeric value to stop",""));
// }
// alert(array);
// }