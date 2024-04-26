type ImageModalProps = {
  params: { id: string };
};

export default function ImageModal({ params: { id } }: ImageModalProps) {
  return <div>{id}</div>;
}
