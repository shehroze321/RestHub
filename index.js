

const express = require("express");
//  here we impport config file for db connection
require("./contactController");
// here we import playlilst file for model
const Hub = require("./contactModel");
//  to make express exceutabel
const app = express();
//  for middleware 
const route=express.Router();
const middleWare= (req,resp,next)=> {
  console.log('please provide parameter')
  next()
}
 route.use(middleWare);
//  to convert data in json which coming from postman
app.use(express.json());


//---1----  post method
app.post("/api/contacts", async (req, resp) => {
  let data = new Hub(req.body);
  let result = await data.save();
  resp.send(result); // to send data in cloud mongo db
  console.log(result);
});
//---2-----  get method 
app.get("/api/contacts",middleWare, async (req, resp) => {
  let data = await Hub.find();
  resp.send(data);
  console.log(data)
});
//----3 -- get with parameter to get a single contact
app.get("/api/contacts/:_id", async (req, resp) => {
  let data = await Hub.find(req.params);
  resp.send(data);
  console.log(req.params)
});
//--------4---update a single contact 
app.put("/api/contacts/:_id", async (req, resp) => {
  let data = await Hub.updateOne(req.params,{$set:req.body});
  resp.send(data);
  console.log(req.params)
});
// --5----delete a single contact
app.delete("/api/contacts/:_id", async (req, resp) => {
  let data = await Hub.deleteOne(req.params);
  resp.send(data);
  console.log(req.params)
});
// app.use("/api",route)
app.listen(5100);
module.exports=app;