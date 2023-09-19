import { Router } from "express";
import { uploader } from "../middlewares/multer.js";
import RopaManager from "../dao/db/RopaManager.js";

const router = Router();
const ropaManager = new RopaManager();

router.post('/', uploader.single('file'), async (req,res) => {
    const { name,brand,price } =  req.body;
    const image = req.file.originalname;
    const ropa = await ropaManager.create(name, brand, price, image)
    res.status(200).send(ropa);
});

export default router