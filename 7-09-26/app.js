// //for loop
// for(let i=1;i<5;i++){
//     console.log(i)
// }
// //
// for(let i=0;i<=10;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
const a=[10,20,90,60,78]
for(let i of a){
    console.log(i)
}
//sum of values
let summ=0
for (let i of a){
    summ+=i
}
console.log(summ)
//small number
let small=a[0]
for(let num of a){
    if(num<small){
        small=num
    }
}console.log(small)
//search a value
const numbers = [10, 15, 20, 25, 30];

const target = 20;

for (const number of numbers) {
    if (number === target) {
        console.log("Found");
    }
}
//reverse the array
for(let i=numbers.length-1;i>=0;i--){
    console.log(numbers[i])

}
//index
// const users1 = ["John", "Alice", "Bob"];
// for (const index in users) {
//     console.log(index);
// }
const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Sara", age: 15 },
    { name: "Mike", age: 22 }
];
for(let a of users){
    if((a.age)>18){
         console.log(a.name)

    }
}
users.forEach((user,index)=>{
    console.log(index,user.name)

})
///
// functions
// function greet() {
//     console.log("Hello");
// }

// greet();
function greet(name) {
    console.log("Hello"+ name);
}

greet("Namitha");
//
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
const users2 = [
    { name: "John", age: 25 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 30 }
];

function finduser(users2,name){
    for (let user of users2){
        if(user.name===name){
            return user
        }

    }
    return null
}
console.log(finduser( users,"Bob"))
//push
const number = [10, 20];

numbers.push(30);

console.log(number);
//pop
const num= [10, 20, 30];

numbers.pop();

console.log(num);
//whether exits 
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana"));
//
console.log(fruits.indexOf("Banana")) //return the index value
//find()
const nu = [10, 20, 30, 40];

const res= nu.find(number => number > 25);

console.log(res); //find the first matching element

//filter based on condition
const r = numbers.filter(number => number > 18);

console.log(r);
//map:
const numbers1 = [10, 20, 30];

const m = numbers1.map(number => number * 2);

console.log(m);
//object:
const user = {
    name: "John",
    address: {
        city: "Hyderabad",
        pincode: 500001
    }
};

console.log(user.address.pincode)
const usr = {
    name: "John",

    greet() {
        console.log("Hello");
    }
};

usr.greet()
//
const user4 = {
    name: "John",
    age: 25
};

console.log(Object.keys(user4));
console.log(Object.values(user4))
//object destructing
const user3 = {
    namee: "John",
    age: 25
};

const { namee, age } = user3;

console.log(namee);
console.log(age);
const nums=[10,20,90,33]
const [x, b, c] = nums;

console.log(x);
console.log(b);
console.log(c)
const n2 = [10, 20];

const rest = [5, ...numbers, 30];

console.log(rest);
const workers = [
    { id: 1, name: "John", active: true },
    { id: 2, name: "David", active: false },
    { id: 3, name: "Peter", active: true }
];
//filter the active usersnames:
const av=workers.filter(user=>user.active)
         .map(user=>user.name)
console.log(av)
//get the user whose id==3
const ad=workers.find(user=>user.id=== 3)
console.log(ad) //return the object
const a3=workers.findIndex(user=>user.id==2)
console.log(a3)