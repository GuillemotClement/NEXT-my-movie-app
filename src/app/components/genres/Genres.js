import Link from "next/link";
import { getMovieByPath } from "../../utils/moviesClient";

export default async function Genres(){
  const { genres } = await getMovieByPath("/genre/movie/list");
  return (
    <div className="">
      <h2 className="text-center font-bold uppercase">Parcourir par genre</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center my-4">
        {genres.map(genre => (
          <div className="py-2 px-3 bg-blue-500 text-white font-bold rounded-md shadow-lg hover:bg-blue-700" key={genre.id}>
            <Link href={`/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}