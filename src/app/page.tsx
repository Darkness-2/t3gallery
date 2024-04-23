const mockUrls = [
  "https://utfs.io/f/b80d2550-8192-4b8f-a7f1-d619e5ab2348-n3h49x.jpg",
  "https://utfs.io/f/b8ba77dc-d103-45e7-841e-801fe4072072-38i8a3.jpg",
  "https://utfs.io/f/1b562bc6-8285-4e8b-a92d-fd8674582a8d-jn8axw.jpg",
  "https://utfs.io/f/6bccc5a0-71ad-4372-82f2-d0792dedfbc8-wlvg1u.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
