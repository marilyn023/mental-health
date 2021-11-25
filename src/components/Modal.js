import React from "react"

export default function Modal() {
  const onPlayCapture = event => {
    console.log(event)
  }

  return (
    <section className="relative">
      <div className="fixed z-10 bg-gray-900 bg-opacity-50 w-full h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white w-96 p-6 rounded-lg">
            <span className="font-bold text-lg text-center">
              Would you like to play some music while reading?
            </span>
            <iframe
              className="mt-5"
              src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
              onPlay={event => onPlayCapture(event)}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
