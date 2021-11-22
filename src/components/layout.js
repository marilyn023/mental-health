import * as React from "react"
import { Navbar, Footer } from "./"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  //let header

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
    <div
      className="container max-w-content mx-auto px-8  py-6 font-base"
      data-is-root-path={isRootPath}
    >
      <Navbar location={location.pathname} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
