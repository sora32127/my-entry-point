import HatenaBlog from './ui/HatenaBlog';
import { Suspense } from "react";
import HatenaBlogSkelton from "./ui/HatenaBlogSkelton";
import Tweet from "./ui/Tweet";
import TweetSkelton from "./ui/TweetSkelton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between">
        <Suspense fallback={<TweetSkelton />}>
          <Tweet username="contradiction29" />
        </Suspense>
        <Suspense fallback={<HatenaBlogSkelton />}>
          <HatenaBlog />
        </Suspense>
      </div>
    </main>
  );
}