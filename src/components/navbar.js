import React, { useEffect, useState } from "react"
import Icon from "./Icon/Icons"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const NavbarItems = ({ list, locationPathname }) => {
  //const [newList, setNewList] = useState([])

  const filtered = locationPathname === "/blog" ? list.splice(0, 2) : list

  return (
    <>
      {filtered.map(type => (
        <Link
          to={type.path}
          key={type.id}
          className="cursor-pointer md:px-6 py-2 rounded-md text-black hover:text-gray-500 md:hover:bg-gray-100 flex"
        >
          <span>{type.title}</span>
        </Link>
      ))}
      <Link
        to="https://isatu-mental-health.netlify.app/admin/"
        className="md:ml-16"
      >
        <button className="bg-primary px-10 py-2 rounded-md text-white hover:opacity-50">
          Login
        </button>
      </Link>
    </>
  )
}

export default function Navbar({ location }) {
  const [width, setWidth] = useState(false)
  const [isToggle, setIsToggle] = useState(false)

  const onToggle = () => setIsToggle(isToggle => !isToggle)

  const screenWidth = () => {
    const width = window.innerWidth
    if (width < 710) {
      setWidth(true)
    } else {
      setIsToggle(false)
      setWidth(false)
    }
  }

  useEffect(() => {
    screenWidth()
    window.addEventListener("resize", screenWidth)
    return () => {
      window.removeEventListener("resize", screenWidth)
    }
  }, [])

  const list = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Blog",
      path: "/blog",
    },
    {
      id: 3,
      title: "Stories",
      path: "#story",
    },
    {
      id: 4,
      title: "Contact",
      path: "#contact",
    },
  ]

  return (
    <section className="flex justify-between font-nunito">
      <div className={`${width ? "hidden" : "flex items-center gap-3"}`}>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/logo.svg"
          width={20}
          height={20}
          quality={95}
          alt="Profile picture"
        />
        <span className="font-bold text-sm">mental health</span>
      </div>
      <nav
        className={`flex flex-col ${
          width ? null : "md:flex-row md:items-center"
        } text-sm`}
      >
        {!width && !isToggle ? (
          <NavbarItems list={list} locationPathname={location} />
        ) : (
          <>{isToggle && <NavbarItems list={list} />}</>
        )}
      </nav>
      <div
        role="button"
        tabIndex={0}
        className={`${width ? "block" : "hidden"} cursor-pointer text-right`}
        onClick={onToggle}
        onKeyDown={onToggle}
      >
        <Icon name="Menu" width="20" height="20" fill="black" />
      </div>
    </section>
  )
}
