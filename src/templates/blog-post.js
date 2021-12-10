import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import DashboardLayout from "../components/DashboardLayout"
import Seo from "../components/seo"
//import { Modal } from "../components"
//import { Drawer } from "antd"
import { DiscussionEmbed } from "disqus-react"
//import useToggle from "../hooks/useToggle"
//import emailjs from "emailjs-com"
import styled from "styled-components"
//import { collection, setDoc, firestore, doc } from "../config/firebase"
//import swal from "sweetalert2"

const BlogPostStyled = styled.section`
  .post-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .feedback-button {
    background: #ff9800;
    border: none;
    outline: none;
    width: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: rgba(255, 152, 0, 0.7);
    }
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  //const [toggle, setToggle] = useToggle()
  //const [toggleFeedback, setToggleFeedback] = useToggle()
  //const [email, setEmail] = React.useState("")
  //const [description, setDescription] = React.useState("")

  // const onSubmit = async event => {
  //   event.preventDefault()
  //   const docData = {
  //     articleId: post.id,
  //     email,
  //     description,
  //     date_created: new Date(),
  //   }

  //   const feedbackRef = doc(collection(firestore, "feedback"))

  //   await setDoc(feedbackRef, docData).then(() => {
  //     swal.fire({
  //       title: "Success",
  //       text: "Thank you for giving us feedback",
  //       icon: "success",
  //     })
  //     openFeedback()
  //   })
  // }

  // const openDrawer = () => setToggle(true)
  // const closeDrawer = () => setToggle(false)

  //const openFeedback = () => setToggleFeedback(state => !state)

  const sendFeedback = event => {
    event.preventDefault()
    const email = "marilyn.simbajon@students.isatu.edu.ph"
    window.open(
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&tf=1`,
      `_blank`
    )

    // emailjs
    //   .sendForm(
    //     "gmail",
    //     "service_o5do01i",
    //     event.target,
    //     "user_ymddO8vZYkXguEEjlldQd"
    //   )
    //   .then(result => {
    //     console.log(result.text)
    //   }).catch((error) =>{
    //     console.log(error.text)
    //   })
  }

  const playlist = [
    {
      id: 1,
      url: "embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator",
    },
    {
      id: 2,
      url: "embed/artist/0oaP0FzHSRg7Dbx2ehVxSF?utm_source=generator&theme=0",
    },
    {
      id: 3,
      url: "artist/0Ol1mhlclpCQlBUF8OPZW0?utm_source=generator&theme=0",
    },
    {
      id: 4,
      url: "embed/playlist/2YC6RDAdPt3J4yD2aJMtjt?utm_source=generator",
    },
    {
      id: 5,
      url: "embed/playlist/4VN7J0uq62foOhZndwOegy?utm_source=generator",
    },
    {
      id: 6,
      url: "embed/playlist/35xI4hSJ8MdO1xkXwsd56a?utm_source=generator",
    },
    {
      id: 7,
      url: "embed/playlist/4x9OtLt7bsmvqktbF0Y0Gm?utm_source=generator&theme=0",
    },
  ]

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(1, 6)

  const disqusConfig = {
    shortname: "mental-health-9",
    config: { identifier: post.id, siteTitle },
  }

  return (
    <>
      {/* {toggleFeedback && (
        <Modal id={post.id} openFeedback={openFeedback}>
          <div className="modal-content">
            <span className="title">Feedback form</span>
            <p>
              Please complete the following form and help us to improve our
              costumer experiences
            </p>
            <form
              action="mailto:contact@yourdomain.com"
              method="POST"
              enctype="multipart/form-data"
              name="EmailForm"
              className="text-center"
            >
              <div>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Email..."
                />
              </div>
              <div>
                <textarea
                  required
                  onChange={event => setDescription(event.target.value)}
                  value={description}
                  placeholder="Some Feedback..."
                  cols={50}
                  rows={5}
                ></textarea>
              </div>
              <div className="button-wrapper">
                <button
                  type="button"
                  onClick={openFeedback}
                  className="cancel-button"
                >
                  cancel
                </button>
                <button className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </Modal>
      )} */}
      <DashboardLayout>
        <BlogPostStyled>
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
              <iframe
                className="rounded-lg mt-4"
                src={`https://open.spotify.com/${playlist[rndInt].url}`}
                width="100%"
                height="80"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </header>
            <hr className="my-5" />
            <section
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
            <button
              onClick={sendFeedback}
              className="feedback-button"
              // className="bg-primary hover:opacity-80 rounded-lg py-2 w-full text-center text-white font-bold my-4"
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
    </>
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
