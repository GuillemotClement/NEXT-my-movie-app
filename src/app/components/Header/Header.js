import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Header(){
  return (
    <header className="">
      <div className="">
        <FontAwesomeIcon icon={faFilm} />
        <p>MyMovieApp</p>
      </div>
      <div className="">
        <nav>
          <ul>
            <li><Link href="/series">Série</Link></li>
            <li><Link href="/movies">Films</Link></li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="Rechercher un film/série ... "/>
      <div className="">
        <FontAwesomeIcon icon={faUser}/>
      </div>
    </header>
  )
}