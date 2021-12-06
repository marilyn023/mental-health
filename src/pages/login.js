import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Login = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      Login
    </Layout>
  )
}

export default Login

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
