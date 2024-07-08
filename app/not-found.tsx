import { Metadata } from "next";

export const metadata: Metadata = {
  title: "not found",
};

// 경로에 파일이 없는 경우 이 함수를 호출함
export default function NotFound() {
  return (
    <div>
      <h1>Not Found!</h1>
    </div>
  );
}
