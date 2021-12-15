import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Search } from "react-feather"

const SearchStyled = styled.section`
  padding: 40px 0;
  display: flex;
  justify-content: flex-end;

  .search-input {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 4px 10px;
    width: 350px;

    svg {
      color: rgba(0, 0, 0, 0.2);
    }

    input {
      outline: none;
      border: none;
    }
  }
`

const StyledCards = styled.section`
  padding: 100px 0;

  .header {
    text-align: center;
    margin: 50px 0;

    span {
      font-weight: bold;
      font-size: 50px;
      color: #3a383f;
    }

    .description {
      margin: 0 auto;
      max-width: 380px;
      font-size: 15px;
      opacity: 0.5;
    }
  }

  .button-explore {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 30px 0;

    .link {
      font-size: 13px;
      text-decoration: none;
      border-radius: 5px;
      background: #ff871e;
      padding: 10px 30px;
      color: #fff;

      &:hover {
        background: rgba(255, 135, 30, 0.7);
      }
    }
  }

  .card-wrapper {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 780px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .card {
      position: relative;
      width: 100%;
      height: 380px;
      border-radius: 10px;
      background-size: cover;

      .inner-card {
        border-radius: 10px;

        height: 100%;
        padding: 20px;
        background: rgb(0, 0, 0, 0.5);

        .content {
          bottom: 0;
          position: absolute;

          .title {
            margin: 10px 0;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
          }

          .sub-paragraph {
            font-size: 15px;
            color: #fff;
          }
        }
      }
    }
  }
`

export default function BlogCards({ data, location, posts }) {
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
  const filterPosts = hasSearchResults ? filteredData : posts

  return (
    <StyledCards id="story">
      <div className="header">
        <span>Tips</span>
        <p className="description">
          Different stories and tips, guides on how to cope up depression
        </p>
      </div>
      <SearchStyled>
        <div className="search-input">
          <Search size="20" />
          <input
            type="text"
            onChange={handleInputChange}
            placeholder="Search article..."
          />
        </div>
      </SearchStyled>
      <div className="card-wrapper">
        {filterPosts?.map(type => (
          <Link
            to={type.fields.slug}
            itemProp="url"
            key={type.fields.slug}
            className="card"
            style={{
              backgroundImage: `url("${type.frontmatter.thumbnail.childImageSharp.fluid.src}")`,
            }}
          >
            <div className="inner-card">
              <div className="content">
                <p className="truncate-header title">
                  {type.frontmatter.title || type.fields.slug}
                </p>
                <p className="sub-paragraph truncate-text">{type.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {location.pathname !== "/blog" && (
        <div className="button-explore">
          <Link to="/blog" className="link">
            Explore more...
          </Link>
        </div>
      )}
    </StyledCards>
  )
}
