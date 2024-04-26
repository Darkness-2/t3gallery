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

export const getImage = async (id: number) => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const imagesResult = await db.select().from(images).where(eq(images.id, id));

  if (imagesResult.length == 0) throw new Error("Image not found");

  const image = imagesResult[0]!;

  if (image.userId !== user.userId) throw new Error("Unauthorized");

  return image;
};
