'use client'

import { useEffect, useState } from 'react'
import TweetSkelton from './TweetSkelton'

interface TwitterTimelineProps {
  username: string
}

export default function Tweet({ username }: TwitterTimelineProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
    <h1>Tweets by {username}</h1>
      <a
        className="twitter-timeline"
        data-lang="ja"
        data-theme="dark"
        data-width="500"
        data-height="800"
        href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
      >Tweets by {username}</a>
    </div>
  )
}