import { Router } from 'express';
import { registerBidder, loginBidder, logoutBidder, senduser, forgetpassword } from '../controllers/bidder_controller.js';
import { authenticateBidder } from '../middlewares/authMiddleware.js';
const router=Router();

router.get('/',authenticateBidder,senduser);
router.post('/register',registerBidder);
router.post('/login',loginBidder);
router.post('/logout',logoutBidder);
router.post('/forget-password',forgetpassword);

export default router;
