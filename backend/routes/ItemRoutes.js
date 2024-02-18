import express  from "express";
import {upload} from "../middlewares/multer.middleware.js";
import { createItem, getAllItems } from "../controllers/ItemController.js";
import { authenticate} from "../middlewares/authMiddleware.js";

const router=express.Router();

router.route('/create').post(authenticate,upload.fields([
    {
        name: 'image',
        maxCount: 1
    }
]),createItem);

router.route('/').get(getAllItems);


export default router;