import * as React from "react"
import { graphql } from "gatsby"
import { BlogLanding, BlogCards } from "../components"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

// const ArticleWrapper = ({ children, title }) => {
//   return (
//     <section>
//       <div className="my-3">
//         <span className="font-bold text-black text-xl text-blue-500">
//           {title}
//         </span>
//         <hr className="my-4" />
//       </div>
//       {children}
//     </section>
//   )
// }

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const allPosts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <BlogLanding />
      <section id="articles">
        <BlogCards posts={allPosts} data={data} location={location} />
      </section>
    </Layout>
  )
}

export default Blog

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
