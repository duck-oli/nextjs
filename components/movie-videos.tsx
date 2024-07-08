import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  const json = (await fetch(`${API_URL}/${id}/videos`)).json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div>
      <h6>{JSON.stringify(videos)}</h6>
    </div>
  );
}
