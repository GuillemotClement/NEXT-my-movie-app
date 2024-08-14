import MediaCard from "./components/media-card/MediaCard";
import Popular from "./components/popular/Popular";
export default function Home() {

  return (
    <div className="container mx-auto py-5 flex gap-x-7 flex-wrap justify-center">
      <Popular />
    </div>
  );
}
