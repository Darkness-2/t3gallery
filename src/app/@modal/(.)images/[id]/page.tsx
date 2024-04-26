import FullImagePage from "~/components/FullImagePage";
import { Modal } from "~/components/Modal";

type ImageModalProps = {
  params: { id: string };
};

export default function ImageModal({ params: { id } }: ImageModalProps) {
  const imageId = Number(id);

  if (Number.isNaN(imageId)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <FullImagePage id={imageId} />
    </Modal>
  );
}
