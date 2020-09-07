const messagesCtrl= {}
const messagesModel=require('../models/Messages');

messagesCtrl.test=async (req,res) => {
    await res.status(200).send('HELddddLO WORLD')
}
messagesCtrl.getMessages=async (req,res) => {
    const messages=await messagesModel.find()
    res.json(messages)
}
messagesCtrl.postMessage=async (req,res) => {
    
    const {message,name,timestamp,received}=req.body;
   
    messagesModel.create({message,name,timestamp,received},(err,data)=>{
        err ? res.status(500).send(err) : res.status(201).send(data)
    }) 
    
   
}
module.exports = messagesCtrl