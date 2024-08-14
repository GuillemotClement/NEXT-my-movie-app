import MediaCard from "./components/media-card/MediaCard";
import Popular from "./components/popular/Popular";
import Genres from './components/genres/Genres';
export default function Home() {

  return (
    <div className="container mx-auto py-5 flex gap-x-7 flex-wrap justify-center">
      <Popular />
      <Genres />
    </div>
  );
}
