import { API_URL } from "../app/constants";


export async function getMovie(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/credits`)).json();
  return json;
}

export default async function MovieCredits({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      {movie.map((movie) => (
        <h1 key={movie.id}>{movie.name}</h1>
      ))}
    </div>
  );
}
