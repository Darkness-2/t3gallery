import { getImage } from "~/server/queries";

type Props = {
  id: number;
};

export default async function FullImagePage({ id }: Props) {
  const image = await getImage(id);

  return (
    <div className="flex h-full w-full text-white">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l border-white">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
