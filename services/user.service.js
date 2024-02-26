import {v4 as uuidv4 } from "uuid";
import Prisma from "../utils/prisma.js";


const userService = {

    async createUser (
        firstName,
        lastName,
        email,
        password,
        address,
        occupation,
        state,
        userName
        ) {
            return await Prisma.user.create({
                data: {
                    id: uuidv4(),
                    firstName,
                    lastName,
                    email,
                    password,
                    address,
                    occupation,
                    state,
                    userName
                }
            })
        },

    async fetchByUsername(username) {
        try {
            const userMember = await Prisma.findFirst({
                where: {
                    username: username
                }
            }) 
            return userMember;
        } catch (error) {
            throw new Error(
             `Error fetching user member by username: ${error.message}`
            )
        }
    },

    async userDetails (
        firstName,
        lastName,
        email,
        password,
        address,
        occupation,
        state,
        userName
    ){
        return await Prisma.user.create({
            data: {
                id: uuidv4(),
                firstName,
                lastName,
                email,
                password,
                address,
                occupation,
                state,
                userName
            }
        });
    },

    async fetchByUsername(userName) {
        const member = await Prisma.user.findFirst({
            where: {
                userName: userName
            }
        })

        return member;
    },
    
    async fetchAllUsers() {
        return await Prisma.user.findMany();
    }
  
   
}




export default userService
