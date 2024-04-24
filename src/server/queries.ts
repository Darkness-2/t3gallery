import "server-only";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { desc, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export const getMyImages = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  return await db
    .select()
    .from(images)
    .where(eq(images.userId, user.userId))
    .orderBy(desc(images.id));
};
