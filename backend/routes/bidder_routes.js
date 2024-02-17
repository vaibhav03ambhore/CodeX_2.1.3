const express=require('express');
const { registerBidder, loginBidder } = require('../controllers/bidder_controller');
const router=express.Router();

router.post('/register',registerBidder);
router.post('/login',loginBidder);

module.exports=router;