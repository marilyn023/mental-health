import * as React from "react"
import { graphql } from "gatsby"
import { Search } from "react-feather"
import { BlogLanding, BlogArticles } from "../components"

//import Bio from "../components/bio"
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

  const allPosts = data.allMarkdownRemark.nodes

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    const query = event.target.value

    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.nodes || []

    // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { description, title, tags } = post.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("") // convert tags from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  console.log(posts)

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="All posts" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <BlogLanding />
      <section id="articles">
        <h1 className="text-center py-8">Articles</h1>
        {/* <section className="flex justify-end my-4">
          <div className="text-right w-96 py-2 px-4  flex items-center gap-2 bg-gray-100 rounded-lg outline-none ">
            <Search className="opacity-20" size="23" />
            <input
              type="text"
              onChange={handleInputChange}
              className="bg-gray-100 text-gray-600 outline-none"
              placeholder="Search article..."
            />
          </div>
        </section> */}
        <ArticleWrapper title="NEWEST ARTICLES">
          <BlogNewPost posts={posts} />
        </ArticleWrapper>
        <ArticleWrapper title="ARTICLES">
          <section className="flex justify-end my-4">
            <div className="text-right w-96 py-2 px-4  flex items-center gap-2 bg-gray-100 rounded-lg outline-none ">
              <Search className="opacity-20" size="23" />
              <input
                type="text"
                onChange={handleInputChange}
                className="bg-gray-100 text-gray-600 outline-none"
                placeholder="Search article..."
              />
            </div>
          </section>
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
