import React from "react"
import Icon from "./Icon/Icons"
import { Link } from "gatsby"

export default function LearnMore({ buttonName, url }) {
  return (
    <div className="my-8 flex items-center gap-3 cursor-pointer transition-all transform hover:translate-x-2.5">
      <Link
        to={url}
        className="font-bold text-primary hover:text-primary text-lg"
      >
        {buttonName}
      </Link>
      <Icon name="Arrow" width="18" height="18" fill="#FF871E" />
    </div>
  )
}
