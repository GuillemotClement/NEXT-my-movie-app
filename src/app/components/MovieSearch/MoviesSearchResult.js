import Image from "next/image";
import Link from "next/link";

export default function MovieSearchResult({movieResults}){
  return (
    <div className="absolute z-10 bg-white top-10 p-3 shadow-xl text-black">
      {movieResults.map(movie => (
        <div className="" key={movie.id}>
          <Link href={`/movies/${movie.id}`} className="flex items-center border-b shadow-md px-2 hover:bg-slate-200">
            <Image src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_PATH}${movie.backdrop_path}`} alt={movie.title} width={90} height={50} className="mr-3 my-3"/>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}