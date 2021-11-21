import React, { useEffect, useState } from "react"
import Icon from "./Icon/Icons"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const NavbarItems = ({ list }) => {
  return (
    <>
      {list.map(type => (
        <a
          href={type.path}
          key={type.id}
          className="cursor-pointer md:px-6 py-2 rounded-md text-black hover:text-gray-500 md:hover:bg-gray-100 flex"
        >
          <span>{type.title}</span>
        </a>
      ))}
      <Link to="/login" className="md:ml-16">
        <button className="bg-primary px-10 py-2 rounded-md text-white hover:opacity-50">
          Login
        </button>
      </Link>
    </>
  )
}

export default function Navbar() {
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
          <NavbarItems list={list} />
        ) : (
          <>{isToggle && <NavbarItems list={list} />}</>
        )}
      </nav>
      {width && (
        <div className="cursor-pointer text-right" onClick={onToggle}>
          <Icon name="Menu" width="20" height="20" fill="black" />
        </div>
      )}
    </section>
  )
}
