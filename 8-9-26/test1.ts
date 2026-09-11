//Type anotation: what type of value we are giving to variable

let varname:string='namitha'
console.log(varname)
let isboolean:boolean=true
console.log(isboolean)
//array
let names:string[]=['john','prithvi','sanjay']
console.log(names)
//number[]
let num1:number[]=[1,2,34,54]
console.log(num1)
//object:
let obj:{
    name:string;
    age:number;
}={
    name:"victor",
    age:25



}
console.log(obj)
//
function summ(a:number,b:number):number{
    return a+b
}
console.log(summ(2,3))
//interface:
interface student{
    id:number;
    age:number;
    name:string
}
let Stud:student={
    id:1,
    age:25,
    name:"nalam"
}
console.log(Stud)
//array of interface objects:
interface User{
    id:number ;
   name:string


}
let user:User[]=[
    {
        id:1,
        name :"nmai"
    },
    {
        id:2,
        name:"mahi"
    }
]
console.log(user)
function getuser(user1:User):string{
    return `${user1.id},${user1.name}`
}
let u:User={
    id:22,
    name:"lkk"
    
}
console.log(getuser(u))
interface User2 {
    id: number;
    name: string;
}

class Admin implements User2 {

    id = 1;
    name = "John";

}
let ad=new Admin()
console.log(ad.name)
///type alias:
type value={
    id:number,
    name:string
}
const ac:value={
    id:12,
    name:"mangamma"
}
console.log(ac.name)
function printid(id:number|string){
    console.log(id)
}
printid('102')
printid(20)

// enum userrole{
//     Admin="admin",
//     User='user'
// }
// let role:userrole=userrole.Admin
// console.log(role)
//generic funtion:
function get<T>(value1:T):T{
    return value1
}
const rep=get<string>("nami")
console.log(rep)
//multiple values:
function pair<T,U>(first:T,Second:U){
    return {first,Second}

}
const op=pair<number,string>(45,"klm")
console.log(op)
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 100
};
console.log(numberBox)
const stringBox: Box<string> = {
    value: "Hello"
};
console.log(stringBox)
//
function isAdult(age:number) : boolean{
     return age>=18
}
console.log(isAdult(25))
console.log(isAdult(15))
function printName(name: string): void {
    console.log(name);
}

printName("John");
//class
class employ{
    id:number;
    name:string;
    private password:string
    constructor(id:number,name:string,password:string){
        this.id=id
        this.name=name
        this.password =password
    }
    greet():void{
        console.log(`hello  ${this.name}`)
    }
    great():void{
        console.log(this.password)
    }

}
const e=new employ(1,'nmi',"636")
console.log(e.name)
e.greet()
e.great()
//
class pro{
    protected name:string
    constructor(name:string){
        this.name=name
    }

}
class child extends pro{
    showpass():void{
        console.log(this.name)
    }
}
const ak=new child("namitha")
ak.showpass()
class Bank{
    private balance:number=0
    deposit(amount:number):void{
        this.balance+=amount
    }
    getbal(){
        return this.balance
    }
}
const bal=new Bank()
bal.deposit(500)
console.log(bal.getbal())


const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 22 },
    { id: 3, name: "Bob", age: 30 }
];
const reso=users.map(user=>{
    if (user.id===2){
        return{
            ...user,
            age:26
        }

    }
    return user;
})
console.log(reso)