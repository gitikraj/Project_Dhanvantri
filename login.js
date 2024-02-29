// const http = require(http);
// // const { log } = require('console');
// function handleSubmit(event) {
//     event.preventDefault();
// }

let id = document.getElementById("healthID").innerHTML;
let password = document.getElementById("password").innerHTML;

if (id.length == 0 || password.length==0) {
    alert("Please enter valid details");
} else {
    location.replace("../dash.html");
}

// const express=require('express');
// const app=express();
// // var myParser = require("body-parser");
// app.use(express.urlencoded({extended : true}));
// const port=80;
// app.use(express.json());
// app.get('/',(req,res)=>{
//     let {id, pass} = req.query;
//     console.log(id);
// });
// app.post('/',(req,res)=>{
//     console.log(req.params);
//     const {healthID,password}=req.params;
//     console.log(healthID);
//     res.send("DONE");
// });
// const submit=document.getElementsByClassName('.login100-form-btn').addEventListener('click',( event) =>
//  {event.preventDefault()
//  });
// app.listen(port,()=>{
//     console.log("SERVER STARTED");
// });