import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { LearnMore } from "./"

export default function Statistics() {
  let title = "Learn more"

  return (
    <section className="max-w-content mx-auto md:flex my-32">
      <div className="w-full md:w-1/2 hidden lg:block">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/Statistics.gif"
          className="w-11/12 hidden lg:block"
          quality={95}
          alt=""
        />
        {/* <img src="/images/Statistics.gif" className="w-9/12" alt="" /> */}
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold my-4 text-secondary max-w-lg">
          Do you know?
        </h1>
        <p className="leading-7 max-w-lg opacity-40">
          More than 700,000 people die due to suicied every year, For every
          suicide there are many more people who attempt suicide. Suicide is the
          fourth leading cause of death in 15-19-year-olds. 77% of global
          suicides occur in low- and middle-income countries. Ingestion of
          pesticide, hanging and firearms are among the most common methods of
          suicide globally.
        </p>
        <LearnMore buttonName={title} />
      </div>
    </section>
  )
}