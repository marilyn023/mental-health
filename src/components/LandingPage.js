import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function LandingPage() {
  return (
    <section className="py-10 lg:flex justify-between">
      <header className="w-full lg:w-1/2 text-center sm:text-left">
        <div className="my-2">
          <span className="text-sm text-primary">#1 Meditation App</span>
          <h1 className="text-5xl md:text-6xl font-bold my-4 text-secondary max-w-lg">
            Calm yourself down, everything will come into place
          </h1>
        </div>
        <div className="max-w-xs md:max-w-sm mx-auto sm:mx-0">
          <span className="text-sm sm:text-base text-secondary opacity-40">
            This website is built to assist your mental health by just giving
            tips and guides while listening to calming music that we provide
          </span>
        </div>
        <div className="my-8 flex items-center justify-center sm:justify-start gap-5">
          <Link
            to="/blog"
            className="bg-primary px-8 py-2 rounded-md text-white hover:text-white hover:opacity-50"
          >
            Start reading
          </Link>
        </div>
      </header>
      <div className="w-full lg:w-1/2">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/Landing-page.svg"
          className="w-11/12 hidden lg:block"
          quality={95}
          alt=""
        />
      </div>
    </section>
  )
}
