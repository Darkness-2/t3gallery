import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

type Props = {
  id: number;
};

export default async function FullImagePage({ id }: Props) {
  const image = await getImage(id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0 text-white">
      <div className="flex flex-grow items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l border-white">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col px-2">
          <span>Uploaded By: {uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col px-2">
          <span>Created On: {image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
