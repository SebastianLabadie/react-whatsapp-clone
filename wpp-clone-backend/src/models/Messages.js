const {Schema,model} = require('mongoose');

const messagesSchema=new Schema({
    message: String,
    name:String,
    timestamp:String,
    received:Boolean,
})
                    
module.exports= model('Messages',messagesSchema)