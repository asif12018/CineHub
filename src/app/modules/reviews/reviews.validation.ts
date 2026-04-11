import z from "zod";




export const CreateReviewValidation = z.object({
    rating: z.number("Rating must be number").int("Rating must be integer").min(1,"Rating must be at least 1").max(10,"Rating must be at most 10"),
    content: z.string("Content must be string").min(1,"Content must be at least 1"),
    tags: z.array(z.string("Tag must be string")).optional(),
    hasSpoiler: z.boolean("Has spoiler must be boolean").optional(),
})


export const UpdateReviewValidation = CreateReviewValidation.partial();



