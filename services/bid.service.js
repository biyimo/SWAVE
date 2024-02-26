import Prisma from "../utils/prisma.js";
import { v4 as uuidv4 } from "uuid";

const biddingService = {


    async counterBid (artisanId, amount, errandDescription, errandId) {
        return await Prisma.bids.create({
            data: {
                id: uuidv4(), 
                artisanId, 
                amount, 
                errandId, 
                errandDescription
            }
        })
    },

    async fetchAllBids () {
        return await Prisma.bids.findFirst();
    },

    async updateBids (id, amount, errandDescription) {
        return await Prisma.bids.update({
            where: {
                artisanId: id
            },
            data: {
                amount, errandDescription
            }
        })
    },  

    async deleteBids (id) {
        return await Prisma.bids.delete({
            where: {
                id: id 
            }
        })
    }
}



export default biddingService
