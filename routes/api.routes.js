var express = require('express')

var router = express.Router()
var user = require('../api/user.routes')
var chatbot = require('../api/pet.routes')

// let verifyToken = require('../api/verifyToken');
let authApi = require('../api/authApi');
var ChatbotController = require('../controller/pet.controller');

//Public Apis---------------------------------------
router.use('/app/users', authApi, user);

//Auth Apis---------------------------------------
router.use('/app/pets', authApi, verifyToken, chatbot);

module.exports = router;
