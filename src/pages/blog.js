import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  //let featuredImgFluid = posts.frontmatter.thumbnail.childImageSharp.fluid

  //console.log(posts)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}
      <ol className="list-none my-10 grid grid-cols-2 gap-4">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <Link
              to={post.fields.slug}
              itemProp="url"
              key={post.fields.slug}
              className="shadow-lg w-92 rounded-lg"
            >
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div
                  className="h-52 w-full rounded-t-lg"
                  style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(${post.frontmatter.thumbnail.childImageSharp.fluid.src})`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <section className="py-4 px-6">
                  <div className="truncate-title">
                    <div>
                      <span className="text-2xl font-bold m-0">{title}</span>
                    </div>
                  </div>
                  <section>
                    <p
                      className="truncate-title"
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <small className="opacity-50">
                      {post.frontmatter.date}
                    </small>
                  </section>
                </section>
              </article>
            </Link>
          )
        })}
      </ol>
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
