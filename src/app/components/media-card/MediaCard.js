import Image from "next/image";
import Link from "next/link";

export default function MediaCard({media}){
  // console.log(`Movie dans le composant : ${media.title}`);
  return (
    <Link href={`/movies/${media.id}`}>
      <div className="border shadow w-52 rounded-lg hover:shadow-2xl hover:scale-110 my-10 h-[30rem]">
      <div className="relative w-full h-[18.75rem]">
        <Image alt={media.title} src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_PATH}${media.poster_path}`} fill className="rounded"/>
      </div>
      <div className="py-3 px-2">
        <p className="text-center font-bold py-2 px-5 rounded-xl bg-blue-500 text-white">{media.vote_average}</p>
        <h3 className="font-bold text-xl">{media.title}</h3>
        <p className="font-light">{new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
      </div>
    </div>
    </Link>  
  )
}