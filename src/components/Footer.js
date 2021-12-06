import Icon from "./Icon/Icons"
import React from "react"
import styled from "styled-components"

const FooterStyled = styled.section`
  width: 100%;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
  }

  .social {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`

export default function Footer() {
  const social = ["Facebook", "Globe", "Instagram", "LinkedIn"]

  return (
    <FooterStyled className="w-72 md:w-full mx-auto md:m-0 text-center opacity-40 mt-16 md:flex items-center justify-center md:justify-between">
      <p>Copyright &#169; Iloilo Science and Technology University</p>
      <div className="social">
        {social.map(type => (
          <div className="cursor-pointer">
            <Icon name={type} width="20" height="20" fill="black" />
          </div>
        ))}
      </div>
    </FooterStyled>
  )
}
