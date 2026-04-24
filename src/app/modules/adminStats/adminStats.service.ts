import { prisma } from "../../lib/prisma";
// Import your enums based on your actual schema
import { ReviewStatus, MediaStatus, PaymentStatus, SubscriptionStatus } from "@prisma/client";

const getDashboardAnalytics = async () => {
  // 1. 🟢 PUBLISHED CONTENT & USER ACTIVITY (Counts)
  const [
    totalUsers,
    publishedMovies,
    publishedSeries,
    pendingReviews,
    purchaseRevenue,
    activeSubscriptionsCount
  ] = await Promise.all([
    prisma.user.count(), // Total registered users
    prisma.media.count({ where: { type: "MOVIE", status: MediaStatus.PUBLISHED } }),
    prisma.media.count({ where: { type: "SERIES", status: MediaStatus.PUBLISHED } }),
    // Assuming your Review model has a status field for admin approval
    prisma.review.count({ where: { status: ReviewStatus.PENDING } }), 
    
    // 🏆 PRO PORTFOLIO MOVE: Calculate total money made
    prisma.purchase.aggregate({
      _sum: { amount: true },
      where: { paymentStatus: PaymentStatus.COMPLETED },
    }),

    // Count active subscriptions to calculate subscription revenue ($75 each)
    prisma.subscription.count({
      where: { status: SubscriptionStatus.ACTIVE },
    }),
  ]);

  // 2. 🟢 PENDING REVIEWS (List to display in a table)
  const recentPendingReviews = await prisma.review.findMany({
    where: { status: ReviewStatus.PENDING },
    take: 10, // Just get the latest 10 for the dashboard preview
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
      media: { select: { title: true } },
    },
  });

  // 3. 🟢 AGGREGATED STATS (Average rating per title - Top 5)
  const topRatedMedia = await prisma.media.findMany({
    where: { status: MediaStatus.PUBLISHED },
    take: 5,
    orderBy: { avgRating: "desc" }, // Uses the field we fixed earlier!
    select: {
      id: true,
      title: true,
      avgRating: true,
      totalReviews: true,
    },
  });

  return {
    overview: {
      totalUsers,
      totalPublishedContent: publishedMovies + publishedSeries,
      moviesCount: publishedMovies,
      seriesCount: publishedSeries,
      pendingReviewsCount: pendingReviews,
      totalRevenue: (Number(purchaseRevenue._sum.amount) || 0) + (activeSubscriptionsCount * 75),
    },
    recentPendingReviews,
    topRatedMedia,
  };
};

export const AdminService = {
  getDashboardAnalytics,
};