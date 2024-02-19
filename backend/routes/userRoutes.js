import express from "express";
import {createOrganizer,loginOrganizer,logoutCurrentOrganizer,getAllOrganizers} from '../controllers/userController.js';
import { authenticateOrganizer } from "../middlewares/authMiddleware.js";


const router=express.Router();

router.route('/register').post(createOrganizer).get(authenticateOrganizer,getAllOrganizers);
router.post('/login',loginOrganizer);
router.post('/logout',logoutCurrentOrganizer);

export default router;