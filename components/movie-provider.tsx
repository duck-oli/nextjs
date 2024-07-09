import { API_URL } from "../app/(home)/page";
import Link from "next/link";

export async function getMovie(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/providers`)).json();
  return json;
}

export default async function MovieProvider({ id }: { id: string }) {
  const movie = await getMovie(id);
  console.log(movie.US.buy);
  return (
    <div>
      {movie.US.buy.map((movie) => (
        <div key={movie.provider_id}>
          <Link
            href={
              "https://www.themoviedb.org/movie/872585-oppenheimer/watch?locale=US"
            }
          >
          <img src={movie.logo_path} alt={movie.provider_name} />
          </Link>
        </div>
      ))}
    </div>
  );
}
