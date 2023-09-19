import { ropaModel } from "../models/ropa.model.js"

class RopaManager {
    async create(name, brand,price,image){
        const ropa = await ropaModel.create({
            name,
            brand,
            price,
            image
        })
        return ropa
    }

    async getAll(){
        const ropa = await ropaModel.find().lean();
        return ropa;
    }
}

export default RopaManager