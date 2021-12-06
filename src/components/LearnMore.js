import React from "react"
//import Icon from "./Icon/Icons"
import { Link } from "gatsby"
import styled from "styled-components"

const LearnMoreStyled = styled.section`
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 150px;
  cursor: pointer;

  .button-name {
    text-decoration: none;
    font-size: 13px;
    color: #fff;
    background: #ff871e;
    padding: 6px 25px;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background: rgba(255, 135, 30, 0.6);
      /* transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateX(10px); */
    }
  }
`

export default function LearnMore({ buttonName, url }) {
  return (
    <LearnMoreStyled>
      <Link to={url} className="button-name">
        {buttonName}
      </Link>
      {/* <div>
        <Icon name="Arrow" width="20" height="20" fill="#FF871E" />
      </div> */}
    </LearnMoreStyled>
  )
}
