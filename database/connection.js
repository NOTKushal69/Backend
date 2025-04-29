
// yaha hami le database ko logic lekdai xam


// yolai destructure gareko vanxa
// const sequelize=require('sequelize')
// const sequelize=sequelize.Sequelize;
// const database.sequelize.Datatypes;

const {Sequelize,DataTypes} =require('sequelize');

// instantiation class lai objects ma lafgxa
const sequelize= new Sequelize("postgresql://postgres.izksfnbestqbbvenmndl:yohaitababu3321@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(()=>{
console.log("Connect bhayo");
})
.catch((err)=>{
console.log("Error"+err)
})


const db={}

db.Sequelize=Sequelize;
db.sequelize=sequelize



module.exports=db;