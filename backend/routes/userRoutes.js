import express from "express";
import {createOrganizer,loginOrganizer,logoutCurrentOrganizer,getAllOrganizers} from '../controllers/userController.js';


import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.route('/').post(createOrganizer).get(authenticate,authorizeAdmin,getAllOrganizers);
router.post('/login',loginOrganizer);
router.post('/logout',logoutCurrentOrganizer);

export default router;