const mongoose= require('mongoose');
 mongoose.connect('mongodb+srv://rest:asghar321@resthub.uklgg9x.mongodb.net/resthub?retryWrites=true&w=majority')


 var db = mongoose.connection;

 // Added check for DB connection
 
 if(!db)
     console.log("Error connecting db")
 else
     console.log("Db connected successfully")