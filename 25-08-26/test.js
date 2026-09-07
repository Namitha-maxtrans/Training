// // Variables :

 var a;   //declaration                    
a=100;     // assigning                       
console.log(a) 

 var a=100; // declaration and assigning in one line
 console.log(a)

 var a=20;                                    
 var  a=200 ;//redeclaration               
 console.log(a) //200                        c
//  //Reassigning
 var b=45;
   b=43;//reassigning
   console.log(b)

//let :es6 concept

  let z=20;//declaration and assigning
  console.log(z)
// let x=200;
// let x=25;
// console.log(x)          //// let doesnot support redeclaration

//const : es6 concept
const num=100;
console.log(a)   //declaration and assigning in one line

//Data Types:
//1. Number:
let n1=20  // int
let p1=20.5  //float
console.log(typeof(n1))
console.log(typeof(p1))

// String :
       let a1="namitha"
       console.log(typeof(a1))

//boolean:
 const n3=true  
 console.log(n3)
 //undefined
 let y;
 console.log(typeof(y))

//Arrow function
const add = (a, b) => {
    console.log(a + b);
};
add(10, 20);

//function declaration
 function greet(){
      	console.log("hi")
}
greet()
//function with return
function add1(a,b){
      	return a+b} ; 
console.log(add1(6,7))
// function Expression
let  ab=function(){             // assigning f/n to a variable
console.log("gm")}
ab()

//Method Object
 let person ={
     	name : "john",
     	age:21,
    	greet:function(){
        	console.log("my name is " + this.name)
 
   	}
}; person.greet()

// higher order and callback f/ns:
function one(){
    	console.log("hi")
}
function two(){
console.log("hello")
}
one(two) //one is higher order f/n and two is callback f/n


//closure: Inner function remember and access the variables from outer function


function outer(){
    let n=23
    function  inner(){
        console.log(n)
    }
    inner()
} outer()
//Map : iterate through each element
const n4=[1,2,3,5]
const res=n4.map(item => item*2)
 console.log(res)
//Filter:Select the elements based on condition

const nump =[1,3,6,97,95]
    	const res1= nump.filter(item => item>6)
        console.log(res1)
// Reduce:It combine all values into single Value

const nq= [1,3,5,6]
const res2 =nq.reduce((sum,num)=>{
        return sum+=num},0)

console.log(res2)

// Promise: it is a way to handle asynchronous operations.

const promise = new Promise((resolve, reject) => {
 
	let success = true;
 
	if (success) {
        resolve("Data received");
	} else {
        reject("Failed");
	}
});
promise
	.then(result => {
        console.log(result);
	})
	.catch(error => {
        console.log(error);
	});
 //Promise Channing:
// It connects the multiple .then together and gives the result.
// Means from one .then result is passing to other .then()

Promise.resolve(10)
      .then(n => n*3)
    .then(n=> n+10)
    .then(res => {
     console.log(res)
    }  )
Promise.resolve()
//Promise.all():
// Wait for all promises to fulfil


const y1=Promise.resolve(10)
const p2=Promise.resolve(20)
const p3=Promise.resolve(30)
Promise.all([y1,p2,p3])
.then( res =>{
    console.log(res)
})

const q1=Promise.resolve(10)
const q2=Promise.reject("some")
const q3=Promise.resolve(30)
Promise.all([q1,q2,q3])
.then( res =>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})
// 	Promise.any():
// It written the first fulfilled promise

 
const g1=Promise.resolve(10)
const g2=Promise.reject("something went wrong")
const g3=Promise.resolve(30)
Promise.any([g1,g2,g3])
  .then( res =>{
    console.log(res)
})
// Async:
// It is a keyword written before function and it will return promise

async function test(){
    return "ho"
}
test().then(res => {
    console.log(res)
})
//Throw:
//We create the errors manually

function test1(age){
    if (age<18){
        throw new Error ("Your are not eligible to vote")
    }
}
try{
    test1(13)
}catch(error){
    console.log(error.message)
}
 
 

 //catch
async function test2() {
	try {
    	const result = await Promise.reject("Failed");
        console.log(result);
	} catch (error) {
        console.log(error);
	}
}test2()
//Await:  it is a keyword written before promise
//Wait for the promises to resolve and the result
let k12 = new Promise((resolve, reject) => {
    resolve("Successfull");
});

async function one1() {
    let a = await k12;
    console.log(a);
}

one1();
//Try and catch:
try{
    console.log(x)
}catch(error){
    console.log(error.message)}  
try {
    console.log("Start");
	console.log(x);
    console.log("End");
} catch (error) {
    console.log("Error occurred");
}
