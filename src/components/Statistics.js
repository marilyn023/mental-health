import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { LearnMore } from "./"
import styled from "styled-components"

const StyledStatistics = styled.section`
  padding: 100px 0;
  display: flex;
  gap: 50px;

  .left-content {
    width: 50%;
    display: block;

    @media (max-width: 780px) {
      width: 100%;
      display: none;
    }
  }

  .right-content {
    width: 50%;

    h1 {
      color: #3a383f;
      font-weight: bold;
    }

    p {
      font-size: 15px;
      opacity: 0.5;
      max-width: 500px;
      line-height: 1.8rem;
    }

    @media (max-width: 780px) {
      width: 100%;
    }
  }
`

export default function Statistics() {
  let title = "Learn more"

  return (
    <StyledStatistics>
      <div className="left-content">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/Statistics.gif"
          quality={95}
          alt=""
        />
        {/* <img src="/images/Statistics.gif" className="w-9/12" alt="" /> */}
      </div>
      <div className="w-full lg:w-1/2 right-content">
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
        <LearnMore
          buttonName={title}
          url="https://isatu-mental-health.netlify.app/hello-new-post-for-today-about-mental-illness/"
        />
      </div>
    </StyledStatistics>
  )
}
