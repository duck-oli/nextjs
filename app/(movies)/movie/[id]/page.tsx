import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
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
    </div>
  );
}
