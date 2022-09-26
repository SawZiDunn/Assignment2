const express= require("express");
const app = express()

app.get("",(req,res)=>{

    res.send("<h1><center>Creating Home Page using express server through node.js</center></h1>")
})

app.get("/page1",(req,res)=>{

    res.send("<h1><center>This is page 1.</center></h2>")
})

app.get("/page2",(req,res)=>{

    res.send("<h1><center>This is page 2.</center></h2>")
})

app.get("/page3",(req,res)=>{

    res.send("<h1><center>This is page 3.</center></h2>")
})

app.get("/page4",(req,res)=>{

    res.send("<h1><center>This is page 4.</center></h2>")
})

app.listen(3000,()=>{

    console.log("Server is starting up at Port:3000");
})