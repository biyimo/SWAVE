import { v4 as uuidv4 } from "uuid";
import Prisma from "../utils/prisma.js";



  //findErrandById
  //Delete Errand by id
  //update errand by id
  // fetch errand by id (include bids)
  //fetch errand by ownerid


const errandService = {
  async requestErrand( userName, errandDescription, location, amount) {
    const errandRequest = await Prisma.createErrand({
      data: {
        id: uuidv4(),
        userName: userName,
        description: errandDescription,
        location: location,
        amount: amount,
        status: "pending",
      },
    });

    return errandRequest;
  },

  async createBid (
    userName, errandDescription, location, amount, ownerId
    ){
        return await Prisma.errandInfo.create({
            data: {
                id: uuidv4(),
                userName,
                errandDescription,
                location,
                amount,
                ownerId,
            }
        })
    },

  async findErrandById(id) {
    return await Prisma.errandInfo.findFirst({
      where: {
        id: id
      }
    });
  },

  async deleteErrandById(id) {
    return await Prisma.errandInfo.delete({
      where: {
        id: id
      }
    });
  },

  async updateErrandById(id, errandDescription, location, amount) {
    return await Prisma.errandInfo.update({
      where: {
        id: id
      },
      data: {
        errandDescription, location, amount
      }
    });
  },

  async fetchErrandByOwnerId(ownerId) {
    return await Prisma.errandInfo.findFirst({
      where: {
        ownerId: ownerId
      }
    });
  },

  async fetchAll() {
    return await Prisma.errandInfo.findMany();
  }

};

export default errandService
