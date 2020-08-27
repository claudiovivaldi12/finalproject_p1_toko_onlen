const express = require('express')
const router = express.Router()

const Controller = require('../controllers')

// router.get('/checkOut/:id',Controller.getCheckoutHandler)
// router.get('/buy',Controller.getBuyHandler)
// router.post('/buy',Controller.postBuyHandler)
router.get('/orderList',Controller.getOrderListHandler)
// router.get('/cancelOrder/:id',Controller.getCancelOrder)
router.get('/login', Controller.getLoginHandler)
module.exports = router
