import express from "express";  
import {home,registration,login} from "../controllers/auth-controllers.js";

const router = express.Router();

router.route('/').get(home)
router.route('/registration').post(registration)
router.route('/login').post(login)
export default router;
