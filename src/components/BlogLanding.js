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
    display: block;

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
      max-width: 400px;
      font-size: 16px;

      @media (max-width: 780px) {
        font-size: 14px;
        max-width: 400px;
      }
    }

    .title {
      margin: 0;
      padding: 10px 0;

      span {
        font-size: 15px;
        color: #ff871e;
      }

      h1 {
        max-width: 500px;
        font-size: 60px;
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
        text-decoration: none;
        font-size: 13px;
        background: #ff871e;
        padding: 10px 30px;
        color: #fff;
        border-radius: 5px;

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

export default function LandingPage() {
  return (
    <LandingPageStyled>
      <header>
        <div className="title">
          <h1>Reading while relaxing your mind is the only goal</h1>
        </div>
        <div className="sub-paragraph">
          <span>
            `just beacuse no one else can heal or do your inner work for you
            doesn't mean you can, should, or need to do it alone`
          </span>
        </div>
        <div className="buttons">
          <Link to="#articles" className="get-started">
            Articles
          </Link>
        </div>
      </header>
      <div className="image-style">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/articles.svg"
          quality={95}
          alt=""
        />
      </div>
    </LandingPageStyled>
  )
}
