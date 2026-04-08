import status from "http-status";
import AppError from "../../../errorHelpers/AppError";
import { prisma } from "../../lib/prisma";
import { createGenre, updateGenre } from "./genre.interface";






const createGenre = async(payload: createGenre)=>{
      const result = await prisma.genre.create({
        data: payload
      })
      return result
}


const getAllGenre = async()=>{
      const result = await prisma.genre.findMany()
      return result
}


const getGenreById = async(id: string)=>{
      const result = await prisma.genre.findUnique({
        where: { id }
      })
      return result
}


const updateGenre = async(id: string, payload: updateGenre)=>{
    const isGenreExist = await prisma.genre.findUnique({
        where: { id }
      })
      if(!isGenreExist){
        throw new AppError(status.NOT_FOUND, "Genre not found")
      }
      const result = await prisma.genre.update({
        where: { id },
        data: payload
      })
      return result
}


const deleteGenre = async(id: string)=>{
      const isGenreExist = await prisma.genre.findUnique({
        where: { id }
      })
      if(!isGenreExist){
        throw new AppError(status.NOT_FOUND, "Genre not found")
      }
      const result = await prisma.genre.update({
        where: { id },
        data: {
            isDeleted: true
        }
      })
      return result
}


export const GenreService = {
    createGenre,
    getAllGenre,
    getGenreById,
    updateGenre,
    deleteGenre
}