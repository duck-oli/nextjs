import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  const json = (await fetch(`${API_URL}/${id}`)).json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <h6>{JSON.stringify(movie)}</h6>
    </div>
  );
}
