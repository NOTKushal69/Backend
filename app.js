const express=require('express');
require('./database/connection');
const app=express();

app.get("/books",(res,req)=>{
  // logic to fetch books from data base
app.json({
  "message":"Well you have successfully fetch book",
})

})

app.post("/books",(req,res)=>{
// logic to add books to database
   
app.json({
  message:"Well you have added book",
})

})
app.delete("/books/:id ",(req,res)=>{
res.json({
  message:"You have deleted books"
})
})

app.listen(2999)
// postgresql://postgresppwzluybbwyypvlzkfpq:lalala@321#321@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
// DATABASE_URL="postgresql://postgres.wyssteilgchhthyyzrxm:wyssteilgchhthyyzrxm@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
