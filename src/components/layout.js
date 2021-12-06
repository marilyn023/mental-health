import * as React from "react"
import { Navbar, Footer } from "./"
import styled from "styled-components"
// import { Link } from "gatsby"

const LayoutWrapper = styled.section`
  padding: 30px 50px;

  @media (max-width: 780px) {
    padding: 30px 25px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <LayoutWrapper
      className="container max-w-content mx-auto px-8  py-6 font-sans"
      data-is-root-path={isRootPath}
    >
      {/* <header className="global-header">{header}</header> */}
      <Navbar location={location.pathname} />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
