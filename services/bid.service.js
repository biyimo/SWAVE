import Prisma from "../utils/prisma.js";
import { v4 as uuidv4 } from "uuid";

const biddingService = {
    async counterBid ( id) {
        return await Prisma.bids.findFirst({
            where: {
                errandId: id
            }
        })
        
    }
   
}

export default biddingService
