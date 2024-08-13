import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Header(){
  return (
    <header className="bg-blue-500 flex justify-between items-center py-3 px-5 text-white font-serif">
      <div className="flex gap-x-2 items-center">
        <FontAwesomeIcon icon={faFilm} size="2xl"/>
        <p className="text-xl ">MyMovieApp</p>
      </div>
      <div className="flex gap-x-4 items-center">
        <nav className="mr-10">
          <ul className="flex gap-x-2">
            <li><Link href="/series">Série</Link></li>
            <li><Link href="/movies">Films</Link></li>
          </ul>
        </nav>
        <input type="text" placeholder="Rechercher un film/série ... " className="border py-1 px-2 rounded-md font-sans text-black min-w-80"/>
        <div className="">
          <FontAwesomeIcon icon={faUser}/>
        </div>
      </div>
    </header>
  )
}