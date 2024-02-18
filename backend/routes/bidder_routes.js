import { Router } from 'express';
import { registerBidder, loginBidder, logoutBidder, senduser } from '../controllers/bidder_controller.js';
import { authenticateBidder } from '../middlewares/authMiddleware.js';
const router=Router();

router.get('/',authenticateBidder,senduser);
router.post('/register',registerBidder);
router.post('/login',loginBidder);
router.post('/logout',logoutBidder);

export default router;