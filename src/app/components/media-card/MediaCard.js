import Image from "next/image";
import Link from "next/link";

export default function MediaCard({mediaId}){
  return (
    <Link href={`/movies/${mediaId}`}>
      <div className="border shadow w-52 rounded-lg hover:shadow-2xl hover:scale-110 my-10">
      <div className="relative w-full h-[18.75rem]">
        <Image alt="picture presentation" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1Qb4L5L8UUWj9nRf6p779q27S9O.jpg" fill/>
      </div>
      <div className="py-3 px-2">
        <h2 className="font-bold text-xl">Titre Film</h2>
        <p className="font-light">26/07/2024</p>
      </div>
    </div>
    </Link>  
  )
}