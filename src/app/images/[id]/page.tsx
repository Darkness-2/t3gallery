import FullImagePage from "~/components/FullImagePage";

type ImagePageProps = {
  params: { id: string };
};

export default function ImagePage({ params: { id } }: ImagePageProps) {
  const imageId = Number(id);

  if (Number.isNaN(imageId)) throw new Error("Invalid photo id");

  return <FullImagePage id={imageId} />;
}
