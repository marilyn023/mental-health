import React, { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { firebaseAuth } from "../config/firebase"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FileText, BookOpen, Play, LogOut } from "react-feather"

const DashboardStyled = styled.section`
  display: flex;

  .left-wrapper {
    position: fixed;
    left: 0;
    background: #fff;
    box-shadow: 5px 10px 20px rgba(0, 174, 164, 0.2);
    width: 280px;
    height: 100vh;

    .left-sidebar {
      display: flex;
      flex-direction: column;
      align-items: center;

      .bio-avatar {
        margin: 30px 0 0;
        border: 2px solid rgba(188, 188, 188, 0.5);
      }

      .display-name {
        margin: 15px 0;
        font-size: 14px;
        background: #ff871e;
        color: #fff;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 50px;
      }
    }

    .list {
      padding: 10px 20px;

      .sidebar-list {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        font-size: 15px;
        font-weight: bold;
        margin: 20px 0;
        padding: 5px 10px;

        .icon {
          width: 15px;
          height: 15px;
        }

        &:hover,
        &:focus {
          padding: 5px 10px;
          background: #ff871e;
          border-radius: 5px;
          color: #fff;
        }
      }

      .logout {
        margin: 25px 0;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        background: #ff871e;
        padding: 5px 10px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;

        .logout-icon {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  .content {
    padding: 40px;
    width: 100%;
    max-width: 1050px;
    margin: 0 0 0 auto;
  }
`
const DashboardLayout = ({ children }) => {
  const context = useContext(AuthContext)

  const list = [
    // {
    //   id: 1,
    //   title: "Browse",
    //   icon: <Globe className="icon" />,
    // },
    {
      id: 2,
      title: "Tips",
      icon: <FileText className="icon" />,
    },
    {
      id: 3,
      title: "Stories",
      icon: <BookOpen className="icon" />,
    },
    {
      id: 4,
      title: "Play Music",
      icon: <Play className="icon" />,
    },
  ]

  const SignOut = () => firebaseAuth.signOut()

  return (
    <DashboardStyled>
      <section className="left-wrapper">
        <div className="left-sidebar">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={160}
            height={160}
            quality={95}
            alt="Profile picture"
          />
          <span className="display-name">{context.authenticted.email}</span>
        </div>

        <div className="list">
          {list.map(type => (
            <div className="sidebar-list" key={type.id}>
              {type.icon}
              <span>{type.title}</span>
            </div>
          ))}
          <div className="logout" onClick={SignOut}>
            <LogOut className="logout-icon" />
            <span>Logout</span>
          </div>
        </div>
      </section>
      <div className="content">{children}</div>
    </DashboardStyled>
  )
}

export default DashboardLayout
