import { Router } from 'express';
import { registerBidder, loginBidder } from '../controllers/bidder_controller.js';
const router=Router();

router.post('/register',registerBidder);
router.post('/login',loginBidder);

export default router;