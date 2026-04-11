import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AdminService } from "./adminStats.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";


const getDashboardAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AdminService.getDashboardAnalytics();

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Admin dashboard analytics retrieved successfully",
    data: result,
  });
});

export const AdminController = {
  getDashboardAnalytics,
};