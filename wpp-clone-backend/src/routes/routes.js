const {Router} = require('express')
const router = Router()
const {test,postMessage,getMessages} = require('../controllers/Messages.controllers')

router.route('/messages/sync')
    .get(getMessages)

router.route('/messages/new')
    .post(postMessage)
    module.exports=router