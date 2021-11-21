import Icon from "./Icon/Icons"
import React from "react"

export default function Footer() {
  const social = ["Facebook", "Globe", "Instagram", "LinkedIn"]

  return (
    <section className="w-72 md:w-full mx-auto md:m-0 text-center opacity-40 mt-16 md:flex items-center justify-center md:justify-between">
      <p>Copyright &#169; Iloilo Science and Technology University</p>
      <div className="flex justify-center gap-5 mt-5">
        {social.map(type => (
          <div className="cursor-pointer">
            <Icon name={type} width="20" height="20" fill="black" />
          </div>
        ))}
      </div>
    </section>
  )
}
