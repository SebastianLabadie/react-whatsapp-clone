//imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const Pusher = require('pusher');


//settings
const app = express()   
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())

//DB config
const URI='mongodb+srv://sebastian:5Uj1OGs8Ukte6ZqH@cluster0.2mong.mongodb.net/wpp-clone?retryWrites=true&w=majority'
mongoose.connect(URI,{
    useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true,
        useFindAndModify:false
})

const connection=mongoose.connection;

connection.once('open',() =>{
    console.log('DB is connected')

    const msgCollection = connection.collection('messages')
    const changeStream= msgCollection.watch()
    changeStream.on('change',(change)=>{
        if(change.operationType === 'insert'){
            const messageDetail = change.fullDocument
            pusher.trigger('messages', 'inserted',{
                name:messageDetail.name,
                message:messageDetail.message,
                timestamp:messageDetail.timestamp,
                received:messageDetail.received,
            })
        }else{
            console.log('error triggering pusher')
        }
    })
})

//PUSHER REALTIME API
const pusher = new Pusher({
  appId: '1068612',
  key: '6d4c6e83bbfb9db71094',
  secret: 'f856722d1dd3db63a6a1',
  cluster: 'us2',
  useTLS: true
});

//api routers
const routes=require('./routes/routes')
app.use('/',routes)

//listen
async function main() {
    await app.listen(port)
    console.log('Server on port '+port)
}

main()