import { prisma } from "../lib/prisma";

// A reusable helper function to update the Media's aggregate stats
export const updateMediaAggregateStats = async (mediaId: string, tx: any = prisma) => {
  // 1. Ask the database to calculate the average and count of ONLY published reviews
  const aggregations = await tx.review.aggregate({
    where: {
      mediaId: mediaId,
      status: "PUBLISHED", // CRITICAL: Only count approved reviews!
    },
    _avg: {
      rating: true, // Calculates the average of the rating column
    },
    _count: {
      id: true,     // Counts how many reviews exist
    },
  });

  // 2. Extract the numbers (fallback to 0 if there are no reviews)
  const averageRating = aggregations._avg.rating || 0;
  const totalReviewsCount = aggregations._count.id || 0;

  // 3. Update the Media table with the fresh cache
  await tx.media.update({
    where: { id: mediaId },
    data: {
      avgRating: Number(averageRating.toFixed(1)), // Keep it to 1 decimal place (e.g., 8.4)
      totalRatings: totalReviewsCount, 
      totalReviews: totalReviewsCount, 
    },
  });
};