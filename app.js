const express=require("express");
const app=express();

app.get("/bfhl",(req,res)=>{
    res.send("hello nirmit");
})

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
});