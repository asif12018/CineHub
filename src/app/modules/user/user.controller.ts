import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { UserServices } from "./user.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";

//get all user



const getAllUser = catchAsync(async(req:Request, res:Response)=>{
    const result = await UserServices.getAllUser();
    sendResponse(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "User fetched successfully",
        data: result
    })
})

//update user status
const bannedAUser = catchAsync(async(req:Request, res:Response)=>{
    const {id} = req.params;
    const adminId = req.user.id;
    const result = await UserServices.bannedAUser(id as string, adminId as string);
    sendResponse(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "User status updated successfully",
        data: result
    })
});


const unbannedAUser = catchAsync(async(req:Request, res:Response)=>{
    const {id} = req.params;
    const result = await UserServices.unbannedAUser(id as string);
    sendResponse(res,{
        httpStatusCode: status.OK,
        success: true,
        message: "User status updated successfully",
        data: result
    })
});




export const UserController = {
    getAllUser,
    bannedAUser,
    unbannedAUser
}