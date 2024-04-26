import { getImage } from "~/server/queries";

type Props = {
  id: number;
};

export default async function FullImagePage({ id }: Props) {
  const image = await getImage(id);

  return <img src={image.url} className="w-96" />;
}
