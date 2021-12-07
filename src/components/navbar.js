import React, { useEffect, useState } from "react"
import Icon from "./Icon/Icons"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3a383f;

  @media (max-width: 780px) {
    align-items: normal;
  }

  .hidden {
    display: none;
  }

  .view {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .title {
    font-weight: bold;
  }
`

const ListStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .list {
    font-size: 14px;
    color: #000;
    text-decoration: none;

    span {
      padding: 15px 18px;
      color: #3a383f;
      border-radius: 5px;

      &:hover {
        background: rgba(188, 188, 188, 0.2);
      }

      @media (max-width: 780px) {
        padding: 15px 0;
        width: 100%;

        &:hover {
          background: transparent;
        }
      }
    }
  }

  button {
    background: #ff871e;
    padding: 10px 50px;
    border-radius: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
    margin: 0 50px;
    font-size: 14px;

    @media (max-width: 780px) {
      margin: 0;
    }

    &:hover {
      background: rgba(255, 135, 30, 0.6);
    }
  }
`

//bg-primary px-10 py-2 rounded-md text-white hover:opacity-50

const NavbarItems = ({ list, locationPathname }) => {
  //const [newList, setNewList] = useState([])

  const filtered = locationPathname === "/blog" ? list.splice(0, 2) : list

  return (
    <ListStyled>
      {filtered.map(type => (
        <Link to={type.path} key={type.id} className="list">
          <span>{type.title}</span>
        </Link>
      ))}
      <Link to="/content" className="md:ml-16">
        <button>Login</button>
      </Link>
    </ListStyled>
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
    <NavbarStyled>
      <div className={`${width ? "hidden" : "view"}`}>
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/logo.svg"
          width={20}
          height={20}
          quality={95}
          alt="Profile picture"
        />
        <span className="title">mental health</span>
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
    </NavbarStyled>
  )
}
