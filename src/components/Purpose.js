import React from "react"
import { LearnMore } from "./"
import Sharing from "../images/sharing-ideas.svg"
import Listening from "../images/listening-music.svg"
import Guidelines from "../images/guidelines.svg"
import styled from "styled-components"

const StyledPurpose = styled.section`
  padding: 100px 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  .left-content {
    width: 40%;
    text-align: left;

    h1 {
      color: #3a383f;
      font-weight: bold;
    }

    .sub-paragraph {
      opacity: 0.5;
      max-width: 300px;
    }
  }

  .right-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    text-align: center;

    @media (max-width: 780px) {
      flex-direction: column;
    }

    .card {
      border: 1px solid rgba(0, 174, 164, 0.1);
      box-shadow: 5px 10px 20px rgba(0, 174, 164, 0.2);
      border-radius: 5px;
      height: 310px;
      width: auto;
      padding: 25px 25px;

      @media (max-width: 780px) {
        width: 100%;
      }

      img {
        width: 200px;
        height: 200px;

        @media (max-width: 780px) {
          width: 100%;
        }
      }

      p {
        padding-top: 10px;
        font-weight: bold;
        width: 200px;
        margin: 0 auto;
      }
    }
  }
`

export default function Purpose() {
  const list = [
    {
      id: 1,
      title: "Tips and Ideas for mental health",
      image: Sharing,
    },
    {
      id: 2,
      title: "Top notch relaxing music",
      image: Listening,
    },
    {
      id: 3,
      title: "Mental health guidelines",
      image: Guidelines,
    },
  ]

  return (
    <StyledPurpose className="my-32 lg:flex">
      <div className="left-content">
        <h1>Our purpose</h1>
        <div className="sub-paragraph">
          Stories in different kind of situations and people around sharing
          their own testimony on how they cope up their situation
        </div>
        <div>
          <LearnMore buttonName="Get started" url="/blog" />
        </div>
      </div>
      <div className="w-full flex items-center flex-col md:flex-row justify-center gap-10 my-10 right-content">
        {list.map(type => {
          return (
            <div className="shadow-lg w-full h-auto md:h-80 rounded-xl py-5 px-5 card">
              <img src={type.image} alt={type.title} />
              <div className="my-5">
                <p className="text-center">{type.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </StyledPurpose>
  )
}
