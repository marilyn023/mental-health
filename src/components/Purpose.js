import React from "react"
import { LearnMore } from "./"
import Sharing from "../images/sharing-ideas.svg"
import Listening from "../images/listening-music.svg"
import Guidelines from "../images/guidelines.svg"

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
    <section className="my-32 lg:flex">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-secondary">Our purpose</h1>
        <div className="opacity-40 my-2 w-full md:w-72">
          Stories in different kind of situations and people around sharing
          their own testimony on how they cope up their situation
        </div>
        <div className="flex justify-center md:justify-start">
          <LearnMore buttonName="Get started" />
        </div>
      </div>
      <div className="w-full flex items-center flex-col md:flex-row justify-center gap-10 my-10">
        {list.map(type => {
          return (
            <div className="shadow-lg w-full h-auto md:h-80 rounded-xl py-5 px-5">
              <img src={type.image} alt={type.title} />
              <div className="my-5">
                <p className="font-bold w-40 mx-auto text-center">
                  {type.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
