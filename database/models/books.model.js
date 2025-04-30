// books , booksname, booksname, booksprice, booksauther, bookscourse

const { Model } = require("sequelize");

// const { types } = require("pg");

const bookModel=(sequelize,DataTypes)=>{
 const Book =sequelize.define("book",{
  bookName :{
    type: DataTypes.STRING,
    allowNull:false
  },
  booksprice:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  bookAuther:{
    type:DataTypes.STRING,
    allowNull:false
  },
  bookGenre:{
    type:DataTypes.STRING,
  },
});

return Book

}
module.exports =bookModel;


//pathauda argument 
// ligda parameter

