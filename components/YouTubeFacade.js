'use client'

import { useState } from 'react'

// A YouTube video that costs the page nothing until it is played (Nov 2026).
// The page shows the video's own thumbnail and a play button; YouTube's player
// (about 1 MB of scripts) loads only when the visitor presses play, so the
// page's speed scores are not held back by an embed nobody has asked for.
// The player is still the privacy-enhanced (no-cookie) one.
export default function YouTubeFacade({ youtubeId, title, thumbnail, priority = false }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 w-full h-full cursor-pointer"
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnail}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      <span className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors" aria-hidden="true" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-14 rounded-2xl bg-red-600 group-hover:bg-red-500 shadow-xl transition-colors" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M8 5v14l11-7z" /></svg>
      </span>
    </button>
  )
}
