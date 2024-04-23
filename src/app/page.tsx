import { desc } from "drizzle-orm";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const allImages = await db.select().from(images).orderBy(desc(images.id));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...allImages, ...allImages, ...allImages].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-48 flex-col">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
