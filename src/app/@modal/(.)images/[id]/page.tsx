import { getImage } from "~/server/queries";

type ImageModalProps = {
  params: { id: string };
};

export default async function ImageModal({ params: { id } }: ImageModalProps) {
  const imageId = Number(id);

  if (Number.isNaN(imageId)) throw new Error("Invalid photo id");

  const image = await getImage(imageId);

  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
