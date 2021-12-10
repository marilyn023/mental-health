import * as React from "react"
//import { AuthProvider } from "../context/AuthProvider"
import Layout from "../components/layout"
import { LandingPage, Statistics, Purpose, Contact } from "../components"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  //const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <LandingPage />
      <Statistics />
      <Purpose />
      {/* <BlogCards posts={posts} data={data} location={location} /> */}
      <Contact />
    </Layout>
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
