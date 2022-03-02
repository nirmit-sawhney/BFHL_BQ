if(process.env.NODE_ENV!=='production'){
    require('dotenv').config();
}

const express=require("express");
const app=express();
const cors=require("cors");

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("Hey there! I am Nirmit Sawhney");
})
app.post("/bfhl",(req,res)=>{
    const data=[...req.body.data];
    let numbers=data.filter((v)=>!isNaN(v));
    let alpha=data.filter((v)=>(/[a-zA-Z]/).test(v));
    res.status(200).send({
        "is_success":"true",
        "user_id":"Nirmit_Sawhney_16112001",
        "email":"nirmit1491.cse19@chitkara.edu.in",
        "roll_number":"1910991491",
        "numbers":numbers,
        "alphabets":alpha
    })
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
});