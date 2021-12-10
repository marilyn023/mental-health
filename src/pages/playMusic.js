import React from "react"
import { DashboardLayout } from "../components"

// const AUTH_URL =
//   "https://accounts.spotify.com/authorize?client_id=4025ed20468244bf8971803afa686c9d"

const PlayMusic = () => {
  return (
    <DashboardLayout>
      <iframe
        className="rounded-lg mt-4"
        src={`https://open.spotify.com/embed/playlist/4VN7J0uq62foOhZndwOegy?utm_source=generator`}
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </DashboardLayout>
  )
}

export default PlayMusic
