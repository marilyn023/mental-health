import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const LandingPageStyled = styled.section`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #3a383f;

  @media (max-width: 780px) {
    padding: 15px 0;
    flex-direction: column;
  }

  .image-style {
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 1080px) {
      width: 100%;
    }

    @media (max-width: 780px) {
      display: none;
    }
  }

  header {
    width: 50%;
    text-align: left;

    @media (max-width: 780px) {
      text-align: center;
      width: 100%;
      margin: 0 auto;
    }

    .sub-paragraph {
      color: rgba(0, 174, 164, 0.7);
      max-width: 600px;
      font-size: 16px;

      @media (max-width: 780px) {
        font-size: 14px;
        max-width: 400px;
      }
    }

    .title {
      margin: 0;
      padding: 10px 0;

      p {
        font-size: 15px;
      }

      h1 {
        max-width: 500px;
        font-size: 50px;
        font-weight: bold;
        padding: 10px 0 0;
        margin: 0;
        color: #3a383f;

        @media (max-width: 780px) {
          max-width: 1200px;
          font-size: 35px;
          text-align: center;
        }
      }
    }

    .buttons {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      @media (max-width: 780px) {
        justify-content: center;
      }

      .get-started {
        cursor: pointer;
        text-decoration: none;
        font-size: 15px;
        background: #ff871e;
        padding: 10px 40px;
        color: #fff;
        border-radius: 5px;
        border: none;
        outline: none;

        &:hover {
          background: rgba(255, 135, 30, 0.5);
        }
      }

      .explore {
        color: #ff871e;
        padding: 10px 30px;
        border-radius: 5px;
        border: 1px solid rgb(255, 135, 30);

        &:hover {
          color: rgba(255, 135, 30, 0.5);
          border: 1px solid rgba(255, 135, 30, 0.5);
        }
      }
    }
  }
`

export default function AboutUsLanding() {
  const contact = event => {
    event.preventDefault()
    const email = "marilyn.simbajon@students.isatu.edu.ph"
    window.open(
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&tf=1`,
      `_blank`
    )
  }

  return (
    <LandingPageStyled>
      <div className="image-style">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/About-us.svg"
          quality={95}
          alt=""
        />
      </div>
      <header>
        <div className="title">
          <h1>About us</h1>
        </div>
        <div className="sub-paragraph">
          <p>
            We all know someone with a mental health problem can see how lives
            would improved with better treatment and support and less stigma.
            Mental health research saves lives, relives significant distress and
            improves quality of life. It also benefits the whole of our society
            be generating social and economic benefits that contribute to
            thriving communities built upon resilience, reduced levels of mental
            ill-health and less stigma and discrimination.
          </p>
          <p>
            The purpose of this research is to help thos students to overcome
            those stress and any other mental health issues. Especially during
            this pandemic and still have to attend classes which is online. This
            situation leads to a more stressful wa of learning than face-to-face
            learning. This study can provide awareness to students who struggle
            in different aspects of mental health issues.
          </p>
        </div>
        <div className="buttons">
          <button onClick={contact} className="get-started">
            Lets talk
          </button>
        </div>
      </header>
    </LandingPageStyled>
  )
}
