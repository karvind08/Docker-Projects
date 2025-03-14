const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.json([
        {
            id:1,
            Name:"Arvind",
            age: 44,
        },
        {
            id:2,
            Name:"Duggu",
            age: 4,
        },
        {
            id:3,
            Name:"Jiya",
            age: 3,
        },
        {
            id:4,
            Name:"Kashwi",
            age: 1,
        },
    ])
})
app.listen(5500,()=>{
    console.log("app is running on 5500 Port")
})