import React, { useState } from "react"
import { ChevronLeft } from "react-feather"
import styled from "styled-components"
import Swal from "sweetalert2"
import {
  collection,
  setDoc,
  firestore,
  doc,
  firebaseAuth,
  createUserWithEmailAndPassword,
} from "../config/firebase"

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
}

const RegisterStyled = styled.section`
  .register-form {
    padding: 30px;
    background: #fff;
    box-shadow: 5px 10px 20px rgba(0, 174, 164, 0.2);
    max-width: 400px;
    height: auto;
    border-radius: 5px;

    .title {
      margin-bottom: 20px;
      span {
        font-size: 25px;
        font-weight: bold;
      }

      p {
        margin-bottom: 15px;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);

        strong {
          cursor: pointer;
          text-decoration: underline;
          color: #ff871e;
          padding: 0;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      label {
        font-size: 14px;
        font-weight: bold;
      }

      .forgot-password {
        text-decoration: underline;
        text-align: right;
        font-size: 13px;
        color: #ff871e;
        cursor: pointer;
      }

      input {
        font-size: 13px;
        border-radius: 5px;
        border: 2px solid rgba(0, 174, 164, 0.5);
        padding: 12px 20px;
        width: 100%;
        outline: none;

        &:hover,
        &:focus {
          border: 2px solid #ff871e;
        }
      }

      .register-btn {
        cursor: pointer;
        width: 100%;
        margin: 20px 0;
        padding: 13px 0;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        border: none;
        outline: none;
        background: #ff871e;
        border-radius: 5px;

        &:hover {
          background: rgb(255, 135, 30, 0.7);
        }
      }

      .back-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #ff871e;

        .back {
          font-size: 13px;
        }
      }
    }
  }
`

const Register = ({ onToggle }) => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`

  const [{ firstname, lastname, email, password }, setState] =
    useState(initialState)

  const onChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    setState(prevState => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const onSubmit = event => {
    event.preventDefault()

    //console.log({ firstname, lastname, email, password })

    const docData = {
      firstname,
      lastname,
      email,
      date_created: new Date(),
    }

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async () => {
        const UserRef = doc(collection(firestore, "users"))

        await setDoc(UserRef, docData).then(() => {
          Swal.fire({
            title: "Successfully",
            text: "Sucessfully Register",
            icon: "success",
          })
          clearState()
        })
      })
      .catch(e => {
        if (e.code === "auth/user-not-found") {
          Swal.fire({
            title: "Warning",
            text: e.message,
            icon: "warning",
          })
        }
      })
  }
  return (
    <RegisterStyled>
      <section className="register-form">
        <div className="title">
          <span>Register</span>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              id="firstname"
              className="input"
              placeholder="Firstname here..."
              name="firstname"
              value={firstname}
              required
              onChange={event => onChange(event)}
            />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              className="input"
              placeholder="Lastname here..."
              name="lastname"
              value={lastname}
              required
              onChange={event => onChange(event)}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="input"
              placeholder="Email here..."
              name="email"
              value={email}
              required
              onChange={event => onChange(event)}
            />
          </div>
          <div>
            <label HtmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password here..."
              name="password"
              value={password}
              required
              onChange={event => onChange(event)}
            />
          </div>
          <div>
            <button type="submit" className="register-btn">
              Register
            </button>
            <div className="back-wrapper" onClick={onToggle}>
              <ChevronLeft size="20" />
              <span className="back">Back</span>
            </div>
          </div>
        </form>
      </section>
    </RegisterStyled>
  )
}

export default Register
