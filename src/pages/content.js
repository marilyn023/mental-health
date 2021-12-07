import React, { useContext } from "react"
import { graphql } from "gatsby"
import { AuthContext } from "../context/AuthProvider"
import Login from "./login"
import Dashboard from "./dashboard"

const Content = ({ data }) => {
  const context = useContext(AuthContext)

  return JSON.stringify(context.authenticted) === `{}` ? (
    <Login />
  ) : (
    <Dashboard data={data} />
  )
}

export default Content

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
`
