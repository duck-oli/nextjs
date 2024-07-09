import styles from "../styles/movie-videos.module.css";
import { API_URL } from "../app/constants";

async function getVideos(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/videos`)).json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
