import Image from "next/image";
import IMG_ANAT from '../../public/profile/anat.jpg'
import IMG_KXIE from '../../public/profile/kxie.jpg'
import Link from "next/link";

const avatars = [
  { src: IMG_ANAT, name: "Anatulya", url: 'https://www.linkedin.com/in/anatulya/' },
  { src: IMG_KXIE, name: "Kevin", url: 'https://www.linkedin.com/in/kevin-xie-267700231/' },
];

export default function Avatars() {
  return (
    <div className="flex flex-row sm:justify-end justify-center space-x-4 sm:-space-x-4 sm:rtl:space-x-reverse">
      {avatars.map((avatar, index) => (
        <div key={index} className="relative group">
          <Link target="_blank" href={avatar.url}>
          
          <Image
            width={96}
            height={96}
            className="w-24 h-24 rounded-full"
            src={avatar.src}
            alt={avatar.name}
          />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 sm:translate-y-1/2 transform bg-gray-800 text-white text-sm px-2 py-1 rounded-md sm:opacity-0 group-hover:opacity-100 ">
            {avatar.name}
          </span>
        </div>
      ))}
    </div>
  );
}