import { Router } from "express";
import RopaManager from "../dao/db/RopaManager.js";

const router = Router();
const ropaManager = new RopaManager();

router.get('/verRopa', async (req,res) =>{
    const ropa = await ropaManager.getAll();
    res.render('ropa', { ropa })
}) 

router.get('/chat' , (req,res) => res.render('chat', {}));

export default router