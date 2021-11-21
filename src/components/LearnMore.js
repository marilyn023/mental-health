import React from "react"
import Icon from "./Icon/Icons"

export default function LearnMore({ buttonName }) {
  return (
    <div className="my-8 flex items-center gap-3 cursor-pointer transition-all transform hover:translate-x-2.5">
      <button className="font-bold text-primary">{buttonName}</button>
      <Icon name="Arrow" width="18" height="18" fill="#FF871E" />
    </div>
  )
}
