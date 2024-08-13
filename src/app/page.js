import MediaCard from "./components/media-card/MediaCard";

export default function Home() {

  return (
    <div className="container mx-auto py-5 flex gap-x-7 flex-wrap justify-center">
      <MediaCard mediaId={10}/>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </div>
  );
}
