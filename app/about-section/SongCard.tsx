import Image from "next/image";
import { SongProps } from "./songDetails";

const SongCard = ({ title, image }: SongProps) => {
  return (
    <div
      className={`hidden sm:block relative flex items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]`}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

export default SongCard;
