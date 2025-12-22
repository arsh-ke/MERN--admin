import express from "express";  
import {home,registration} from "../controllers/auth-controllers.js";

const router = express.Router();

router.route('/').get(home)
router.route('/registration').post(registration)

export default router;