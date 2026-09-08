// const http=require('http')
// let users =[{
//     id:1,
//     name:"namitha"}
// ,{id:2,name:"sanjay"}]
// const server=http.createServer((req,res)=>{
//     const url=new URL(req.url,`http://${req.headers.host}`)
//     const method=req.method
//     const pathname=url.pathname
//     if(method==='GET' && pathname==='/users'){
//          res.writeHead(200,{
//      'content-type':'application/json'})

//        res.end(JSON.stringify(users))
//          }
//     else if (method=="GET" && pathname.startsWith('/users/'))
//     {
//         const id=Number(pathname.split('/')[2])
//         const user=users.find(user=>user.id==id)
//         if(!user){
//             res.writeHead(404,{
//                 "content-type":"application/json"
//             })
//             res.end(JSON.stringify({
//                 message:"user not found"
//             }))
//             return;
//         }
//        res.writeHead(200,{
//         "content-type":"application/json"
//        })
//        res.end(JSON.stringify(user))
//     }

//      else if (method==="POST" && pathname==='/users'){
//         let body=''
//         req.on("data",chunk=>{
//             body+=chunk
//         })
//         req.on("end",()=>{
//             const newuser=JSON.parse(body)
//             newuser.id=users.length+1
//             users.push(newuser);
//             res.writeHead(201,{
//                 "content_type":"json"
//             });
//             res.end(JSON.stringify(newuser))
//         })
//      }
//      else if(method==="PUT" && pathname.startsWith("/users/")){
//         const id =Number(pathname.split('/')[2])
//         let body=""
//         req.on("data",chunk=>body+=chunk)
//         req.on("end",()=>{
//           const UpdatedUser=JSON.parse(body)
//            const index=users.findIndex(user=>user.id==id);
//            if(index===-1){
//             res.writeHead(404,{
//                 "content-type":"json"
//             })
//             res.end(JSON.stringify({
//                 message:"user not found"
//             }))
//            }
//                return ;
          
//            UpdatedUser.id=id
//            users[index]=UpdatedUser
//          res.writeHead(200, {
//                 "Content-Type": "application/json"
//             });

//             res.end(JSON.stringify(UpdatedUser));
     
//         })

           
//      }
//      else if(method==="DELETE"&& pathname.startsWith('/users/')){
//         const id=Number(pathname.split('/')[2])
//         const index = users.findIndex(user => user.id === id);

//         if (index === -1) {

//             res.writeHead(404, {
//                 "Content-Type": "application/json"
//             });

//             res.end(JSON.stringify({
//                 message: "User not found"
//             }));

//             return;
//         }
//         const deletedUser=users.splice(index,1)
//         res.writeHead(200,{
//             "content-type":"json"
//         })
//         res.end(JSON.stringify({
//             message:"user deleted sucessfully",
//             users:deletedUser[0]

//         }))
//      }
//      else {
//         res.writeHead(400,{"content-type":"json"})
//         res.end(JSON.stringify({
//             message:"no route found"
//         }))
//      }
  

// })
// server.listen(3000,()=>
//     console.log("http://localhost:3000"))

const fs=require('fs')
fs.writeFile('new.txt',"hello world",(error)=>{
    if(error){
        console.log(error.message)}
    console.log("file writtten")

})
const str="banana"
const count={}
for (let char of str){
    count[char]=(count[char]||0)+1
}
console.log(count)
