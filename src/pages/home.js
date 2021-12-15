import React from "react"
import {
  LandingPage,
  Statistics,
  Purpose,
  BlogCards,
  Contact,
} from "../components"
import Layout from "../components/layout"
import Seo from "../components/seo"
//import { Link } from "gatsby"
//import { Search } from "react-feather"
import styled from "styled-components"

// const SearchStyled = styled.section`
//   padding: 10px 0 30px;
//   display: flex;
//   justify-content: flex-end;

//   .search-input {
//     font-size: 14px;
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     border: 1px solid rgba(0, 0, 0, 0.2);
//     border-radius: 5px;
//     padding: 8px 10px;
//     width: 100%;

//     svg {
//       color: rgba(0, 0, 0, 0.2);
//     }

//     input {
//       outline: none;
//       border: none;
//     }
//   }
// `

const DashboardStyled = styled.section`
  h1 {
    margin: 5px 0;
    font-weight: bold;
    font-size: 30px;
    color: #3a383f;
  }

  p {
    opacity: 0.5;
    width: 400px;
  }

  .article-main-wrapper {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: masonry;

    .card {
      box-shadow: 5px 10px 20px rgba(0, 174, 164, 0.2);
      max-width: 300px;
      height: auto;
      text-decoration: none;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .article-body {
        margin: 10px 0;
        background: #fff;
        padding: 10px 20px;

        h1 {
          font-weight: bold;
          font-size: 20px;
        }

        .article-paragraph {
          color: rgba(188, 188, 188);
        }

        .article-wapper {
          margin: 10px 0 10px;
          .article-date {
            font-size: 15px;
            color: rgba(188, 188, 188);
          }
        }
      }
    }
  }
`

const Home = ({ data, location }) => {
  const allPosts = data?.allMarkdownRemark.nodes
  const siteTitle = data?.site.siteMetadata?.title || `Title`
  //const posts = data.allMarkdownRemark.nodes

  const GRID_LIMIT = 6
  const firstSix = allPosts?.slice(1, GRID_LIMIT)

  // //console.log(allPosts)

  // const emptyQuery = ""

  // const [state, setState] = React.useState({
  //   filteredData: [],
  //   query: emptyQuery,
  // })

  // const handleInputChange = event => {
  //   const query = event.target.value

  //   // this is how we get all of our posts
  //   const posts = data.allMarkdownRemark.nodes || []

  //   // return all filtered posts
  //   const filteredData = posts.filter(post => {
  //     // destructure data from post frontmatter
  //     const { description, title, tags } = post.frontmatter
  //     return (
  //       // standardize data with .toLowerCase()
  //       // return true if the description, title or tags
  //       // contains the query string
  //       description.toLowerCase().includes(query.toLowerCase()) ||
  //       title.toLowerCase().includes(query.toLowerCase()) ||
  //       (tags &&
  //         tags
  //           .join("") // convert tags from an array to string
  //           .toLowerCase()
  //           .includes(query.toLowerCase()))
  //     )
  //   })

  //   // update state according to the latest query and results
  //   setState({
  //     query, // with current query string from the `Input` event
  //     filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
  //   })
  // }

  // const { filteredData, query } = state
  // const hasSearchResults = filteredData && query !== emptyQuery
  // const filterPosts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <LandingPage />
      <Statistics />
      <Purpose />
      <BlogCards posts={firstSix} data={data} location={location} />
      {/* <Contact /> */}
    </Layout>
  )
}

export default Home
