import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import DashboardLayout from "../components/DashboardLayout"
import Seo from "../components/seo"
import { Modal } from "../components"
//import { Drawer } from "antd"
import { DiscussionEmbed } from "disqus-react"
import useToggle from "../hooks/useToggle"
import styled from "styled-components"

//import { Modal } from "../components"

const BlogPostStyled = styled.section`
  .post-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  //const [toggle, setToggle] = useToggle()
  const [toggleFeedback, setToggleFeedback] = useToggle()

  // const openDrawer = () => setToggle(true)
  // const closeDrawer = () => setToggle(false)

  const openFeedback = () => setToggleFeedback(state => !state)

  // console.log(toggleFeedback)

  // const playlist = [
  //   {
  //     id: 1,
  //     url: "embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator",
  //   },
  //   {
  //     id: 2,
  //     url: "embed/artist/0oaP0FzHSRg7Dbx2ehVxSF?utm_source=generator&theme=0",
  //   },
  //   {
  //     id: 3,
  //     url: "artist/0Ol1mhlclpCQlBUF8OPZW0?utm_source=generator&theme=0",
  //   },
  //   {
  //     id: 4,
  //     url: "embed/playlist/2YC6RDAdPt3J4yD2aJMtjt?utm_source=generator",
  //   },
  //   {
  //     id: 5,
  //     url: "embed/playlist/4VN7J0uq62foOhZndwOegy?utm_source=generator",
  //   },
  //   {
  //     id: 6,
  //     url: "embed/playlist/35xI4hSJ8MdO1xkXwsd56a?utm_source=generator",
  //   },
  //   {
  //     id: 7,
  //     url: "embed/playlist/4x9OtLt7bsmvqktbF0Y0Gm?utm_source=generator&theme=0",
  //   },
  // ]

  const disqusConfig = {
    shortname: "mental-health-9",
    config: { identifier: post.id, siteTitle },
  }

  return (
    <DashboardLayout>
      <BlogPostStyled>
        {toggleFeedback && <Modal id={post.id} openFeedback={openFeedback} />}
        {/* <Drawer
        visible={toggle}
        onClose={closeDrawer}
        title="Music Section"
        placement="right"
      >
        <h1 className="text-xl font-bold text-blue-500">Play some music</h1>
        <p>music helps our mind to focus and understand what we are reading</p>
        {playlist.map(list => (
          <iframe
            key={list.id}
            title={list.url}
            className="rounded-lg mt-4"
            src={`https://open.spotify.com/${list.url}`}
            width="100%"
            height="80"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        ))}
      </Drawer> */}
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className="blog-post global-wrapper"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div
            style={{
              width: "100%",
              height: "350px",
              marginBottom: "50px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${post.frontmatter.thumbnail.childImageSharp.fluid.src})`,
              backgroundRepeat: "no-repeat",
            }}
          />
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <div className="post-date">
              <p>{post.frontmatter.date}</p>
              {/* <button
              onClick={openDrawer}
              className="bg-primary px-5 py-2 text-sm rounded-lg text-white font-bold"
            >
              Add some beats!
            </button> */}
            </div>
          </header>
          <hr className="my-5" />
          <section
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <button
            onClick={openFeedback}
            className="bg-primary hover:opacity-80 rounded-lg py-2 w-full text-center text-white font-bold my-4"
          >
            Feedback
          </button>
          <hr />

          <DiscussionEmbed {...disqusConfig} />

          <footer>
            <Bio />
          </footer>

          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </article>
      </BlogPostStyled>
    </DashboardLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
