import * as React from "react"
import { graphql } from "gatsby"
import { BlogLanding, BlogArticles } from "../components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { BlogNewPost } from "../components"

const ArticleWrapper = ({ children, title }) => {
  return (
    <section>
      <div className="my-3">
        <span className="font-bold text-black text-xl text-blue-500">
          {title}
        </span>
        <hr className="my-4" />
      </div>
      {children}
    </section>
  )
}

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
      <BlogLanding />
      <section id="articles">
        <h1 className="text-center py-8">Articles</h1>
        <ArticleWrapper title="NEWEST ARTICLES">
          <BlogNewPost posts={posts} />
        </ArticleWrapper>
        <ArticleWrapper title="ARTICLES">
          <BlogArticles posts={posts} />
        </ArticleWrapper>
      </section>
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
