//TypeScript
let namee: string = "Namitha";
let age: number = 25;


console.log(namee);
console.log(age);
//undefined
 let username2:string|undefined
 username2="kranthi"
 console.log(username2)


//any: we can store anytype
let storeanything:any;
storeanything="25";

console.log(storeanything)
//array:we define array byusing []
//string array:
let arr: string[] =["namitha","vignesh","Rama"]
console.log(arr[1])
arr.push("mani")     //it used to push the value
console.log(arr)
// //number array:
let num3:number[]=[1,2,56,89]
console.log(num3)
for (let i of num3){
    console.log(i)
}
// //combination of both
let variables:(string|number)[]=["1",25,"mani"]
console.log(variables)
//tuple: tuple is an array with fixed structure and specific type
let ao:[string,number,string]=["nami",25,"kkk"];
console.log(ao)
// /////object:
let obj:{
    value:string,
    price:number,
    country:string
}={
   value:"something" ,
   price:255,
   country:"india"
}
console.log(obj)
console.log(obj.country)
///interface : we define the structure or shape of an object
interface student{
      studname:string,
      studroll:number
}
let details:student ={
    studname:"chikka",
    studroll:1
}
console.log(details)

//type alias:

type val =string

let stName:val= "ppp";
let teacherName:val="lolo";
let employeeName:val="ooo";
console.log(employeeName)

type syn = {
    agee:number,
    blood:string

}
let de:syn ={
    agee:28,
    blood:"b"
}
console.log(de.agee)
//union: combining differnt types like or
type id=string|number
let Id:id=101
let userid:id="namitha"
console.log(Id)
console.log(userid)
// union with function
function printId(id: string | number) {
    console.log(id);
}
printId(101);
printId("EMP101");


//optional : we may or may not declare the value
type emp={
    empname:string,
    empno:number,
    place?:string
}
let Emp1:emp ={
    empname:"manu",
    empno:255,
    place:"sulthanabad"

}
console.log(Emp1)

// enum:
//by default it will give numbers
enum Status {
    pending,
    fulfilled,
    progress
}
console.log(Status)
let se:Status=Status.pending
console.log(se)
enum Status1 {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
let pe:Status1=Status1.Pending
console.log(pe)
//generics
// like when we donotknow the values <T> acts like a placeholder
function identity<T>(values:T):T{
    return values
}
let resp=identity<number>(1000)
let re1=identity<string>("you")
console.log(resp)
console.log(re1)
// //function types
function add5(v:number ,k:number):number{
    return v+k
}
console.log(add5(66,44))

// we can assign function to a variable:
let ak:(x:number,y:number)=>number
ak=function(x,y){
    return x+y
}
console.log(ak(3,5))
//string with arrow function
let al:(i:string)=>string
al= (i)=>{
    return "hi "+i

}
console.log(al("mani"))

// //function with void doesnot return anything
let y8:(o:string)=>void
y8=(namey)=>{
    console.log(namey)

}
(y8("Namitha"))
//f/n without parameters
let nop:()=>string
nop=()=>{
    return "hello"

}
console.log(nop())
//Type narrowing : here we specify the type to ts .it will the type and do operations
function printValue(value1: string | number) {

    if (typeof value1 === "string") {
        console.log(value1.toUpperCase());
    } else {
        console.log(value1.toFixed(2));
    }

}
printValue(100)
printValue("panjagutta")
// Array.isArray(): suppose if the value is array or string
function process(value2: string | string[]) {

    if (Array.isArray(value2)) {
        console.log(value2.length);
    } else {
        console.log(value2.toUpperCase());
    }

}
process(["12","13","mmm"])
process("om nama shivaya")
//instanceof it used in classes
class Dog {
    bark() {
        console.log("Woof");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}

function makeSound(animal: Dog | Cat) {

    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }

}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);

//undefined:
let username: string | undefined;
username="nmaitha"
if (username !== undefined) {
    console.log(username.toUpperCase());
}
//type assertion: here we say what type of value it is
let value:unknown="namitha"
let p0=value as string;
console.log(p0.toUpperCase())
