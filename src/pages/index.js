import * as React from "react"
import { AuthContext } from "../context/AuthProvider"
import Login from "./login"
import Home from "./home"
import { graphql } from "gatsby"

const BlogIndex = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`
  //const posts = data.allMarkdownRemark.nodes
  const context = React.useContext(AuthContext)

  return JSON.stringify(context.authenticted) === `{}` ? (
    <Login />
  ) : (
    <Home data={data} location={location} />
  )
}

export default BlogIndex

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
      }
    }
  }
`
