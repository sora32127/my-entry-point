import { Suspense } from "react";
import type { Metadata } from "next";
import HatenaBlog from './ui/HatenaBlog';
import HatenaBlogSkelton from "./ui/HatenaBlogSkelton";
import Tweet from "./ui/Tweet";
import TweetSkelton from "./ui/TweetSkelton";
import { SelfIntroductionTop } from './ui/SelfIntroductionTop';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-between">
        <div className="my-4">
          <SelfIntroductionTop />
        </div>
        <Suspense fallback={<HatenaBlogSkelton />}>
          <HatenaBlog />
        </Suspense>
        <Suspense fallback={<TweetSkelton />}>
          <Tweet username="contradiction29" />
        </Suspense>
      </div>
    </main>
  );
}


