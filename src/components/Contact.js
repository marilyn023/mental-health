import React from "react"
import styled from "styled-components"

const ContactStyled = styled.section`
  padding: 100px 0;
  text-align: center;
  width: 500px;
  margin: 0 auto;

  h1 {
    color: #3a383f;
    font-size: 40px;
    font-weight: bold;
  }

  p {
    opacity: 0.5;
    font-size: 15px;
  }

  button {
    margin: 10px 0;
    background: #ff871e;
    padding: 10px 40px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background: rgba(255, 135, 30, 0.7);
    }
  }
`

export default function Contact() {
  const contact = event => {
    event.preventDefault()
    const email = "marilyn.simbajon@students.isatu.edu.ph"
    window.open(
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&tf=1`,
      `_blank`
    )
  }

  return (
    <ContactStyled id="contact">
      <h1>Connect with us.</h1>
      <p>
        If you have problems, or situation that you cant really handle, you can
        directly message us by clicking this button below
      </p>
      <div>
        <button onClick={event => contact(event)}>Contact us</button>
      </div>
    </ContactStyled>
  )
}
