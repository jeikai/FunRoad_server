const api = require("express").Router();
const userController = require('../controller/userController')


api.post('/api/user', userController.create)
api.get('/api/user', userController.getAll)
api.put('/api/user', userController.update)
module.exports = api