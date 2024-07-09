import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieProvider from "../../../../components/movie-provider";
import MovieCredits from "../../../../components/movie-credits";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      {/* 
        Suspense는 서버측에서 정보를 병렬적으로 불러옴

        Suspense에 파라미터중 fallback은 loading 파일처럼
        메인 page파일이 로딩 되기 전에 보여줄 내용을 정의함

        fallback, loading은 자주 안쓸것 같음
      */}
      <Suspense>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense>
        <MovieProvider id={id} />
      </Suspense>
    </div>
  );
}
