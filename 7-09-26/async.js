const promise = new Promise((resolve, reject) => {

    resolve("Data received");

});

promise.then((result) => {
    console.log(result);
});
const p=new Promise((resolve,reject)=>{
    reject("something gone wrong")
})
.then(res=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})
function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data resolved")
        })
    })
}
async function main() {

    try {

        const result = await getData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}
const users = [
    { id: 1, name: "John", role: "ADMIN" },
    { id: 2, name: "David", role: "USER" },
    { id: 3, name: "Peter", role: "USER" }
];
function getUserById(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user=users.find(user=>user.id===id)
            if(user){
               resolve(user)
            }else{
                reject( new Error("usernotfound"))
            }
        },1000)

    })

}
async function fetchUser(id){
    try{
        const user=await getUserById(id)
        console.log(user)
    }
    catch(error){
        console.log(error.message)

    }
}
fetchUser(2)