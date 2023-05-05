const express=require('express')
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const app=express()
const path= require('path')
app.get("/",function(req,res)
{
    res.render("home")

})
//set tamplet engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')
app.listen(process.env.PORT||3000,()=>{
    console.log('starting the port 3000')
})