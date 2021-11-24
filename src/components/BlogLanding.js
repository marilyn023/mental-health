import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function BlogLanding() {
  return (
    <section className="py-10 lg:flex justify-between">
      <header className="w-full lg:w-1/2 text-center sm:text-left">
        <div className="my-2">
          <h1 className="text-5xl md:text-6xl font-bold my-4 text-secondary max-w-lg">
            Reading while relaxing your mind is the only goal
          </h1>
        </div>
        <div className="max-w-xs md:max-w-sm mx-auto sm:mx-0">
          <span className="text-sm sm:text-base text-secondary opacity-40">
            `just beacuse no one else can heal or do your inner work for you
            doesn't mean you can, should, or need to do it alone`
          </span>
        </div>
        <div className="my-8 flex items-center justify-center sm:justify-start gap-5">
          <a
            href="#articles"
            className="bg-primary px-8 py-2 rounded-md text-white hover:opacity-50"
          >
            Start reading
          </a>
        </div>
      </header>
      <div className="w-full lg:w-1/2">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/articles.svg"
          className="w-11/12 hidden lg:block"
          quality={95}
          alt=""
        />
      </div>
    </section>
  )
}
