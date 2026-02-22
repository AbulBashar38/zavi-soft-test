import Image from "next/image";

type ProductImagesProps = {
  title: string;
  images: string[];
};

const fallbackImage = "/images/hero-feature1.jpg";

const cornerRadius = [
  "rounded-tl-[3em]",
  "rounded-tr-[3em]",
  "rounded-bl-[3em]",
  "rounded-br-[3em]",
];

const ProductImages = ({ title, images }: ProductImagesProps) => {
  const safeImages = images.length > 0 ? images : [fallbackImage];
  const galleryImages =
    safeImages.length >= 4
      ? safeImages.slice(0, 4)
      : Array.from(
          { length: 4 },
          (_, index) => safeImages[index % safeImages.length],
        );

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {galleryImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`relative overflow-hidden border border-transparent bg-white/65 ${cornerRadius[index]}`}
        >
          <div className="relative aspect-4/5 w-full">
            <Image
              src={image || fallbackImage}
              alt={`${title} view ${index + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 28vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
