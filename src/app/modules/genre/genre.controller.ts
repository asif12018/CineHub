import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import status from "http-status";
import { GenreService } from "./genre.services";
import { sendResponse } from "../../shared/sendResponse";






const createGenre = catchAsync(async(req:Request, res:Response)=>{
    const result = await GenreService.createGenre(req.body)
    sendResponse(res, {
        httpStatusCode: status.CREATED,
        success: true,
        message: "Genre created successfully",
        data: result
    })
});


const updateGenre = catchAsync(async(req:Request, res:Response)=>{
    const {id} = req.params
    const result = await GenreService.updateGenre(id as string, req.body)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre updated successfully",
        data: result
    })
})


const deleteGenre = catchAsync(async(req:Request, res:Response)=>{
    const {id} = req.params
    const result = await GenreService.deleteGenre(id as string)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre deleted successfully",
        data: result
    })
})


const getAllGenre = catchAsync(async(req:Request, res:Response)=>{
    const result = await GenreService.getAllGenre()
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre fetched successfully",
        data: result
    })
})


const getGenreById = catchAsync(async(req:Request, res:Response)=>{
    const {id} = req.params
    const result = await GenreService.getGenreById(id as string)
    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Genre fetched successfully",
        data: result
    })
})


export const GenreController = {
    createGenre,
    updateGenre,
    deleteGenre,
    getAllGenre,
    getGenreById
}