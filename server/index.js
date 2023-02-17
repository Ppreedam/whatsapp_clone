const expres = require("express");

const bodyparser = require("body-parser");

const Port =  5000

const app = expres();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({extended:true}));


app.get("/",(req,res)=>{
    res.send("hello dear how are you")
})

app.listen(Port, ()=>{
    console.log(`server is live on http://localhost:${Port}`)
})