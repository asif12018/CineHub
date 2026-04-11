import { stat } from "node:fs";
import AppError from "../../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma"
import status from "http-status";
import { Role } from "@prisma/client";






//get all user



const getAllUser = async()=>{
     const result = await prisma.user.findMany();

     return result;
}


//update user status

const bannedAUser = async(id: string, adminId: string) =>{
    const isUserExist = await prisma.user.findUniqueOrThrow({
        where:{
            id: id
        }
    });

    // console.log(isUserExist);

    if(isUserExist.banned === true){
        throw new AppError(status.BAD_REQUEST, "User is already banned")
    }

    if(isUserExist.role === Role.SUPER_ADMIN){
        throw new AppError(status.BAD_REQUEST, "Super admin can't be banned")
    };

    if(isUserExist.id === adminId){
        throw new AppError(status.BAD_REQUEST, "You can't ban yourself")
    }

    const result = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            banned: true
        }
    });

    return result;
}


const unbannedAUser = async(id: string) =>{
    const isUserExist = await prisma.user.findUniqueOrThrow({
        where:{
            id: id
        }
    });

    if(isUserExist.banned === false){
        throw new AppError(status.BAD_REQUEST, "User is already unbanned")
    }

    const result = await prisma.user.update({
        where:{
            id: id
        },
        data:{
            banned: false
        }
    });

    return result;
}




export const UserServices = {
    getAllUser,
    bannedAUser,
    unbannedAUser
}