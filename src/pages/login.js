import React from "react"
//import Layout from "../components/layout"
import { Register, Modal } from "../components"
import useToggle from "../hooks/useToggle"
import styled from "styled-components"
//import Icon from "../components/Icon/Icons"
import loginBackground from "../images/login-background.jpg"
import Swal from "sweetalert2"
import {
  firebaseAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "../config/firebase"

const LoginStyled = styled.section`
  height: 100%;

  .bg-image {
    .content {
      padding: 80px;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;

      display: flex;
      gap: 40px;

      header {
        color: #fff;
        span {
          font-size: 50px;
          font-weight: bold;
        }

        p {
          max-width: 500px;
        }
      }

      .login-form {
        padding: 30px;
        background: #fff;
        box-shadow: 5px 10px 20px rgba(0, 174, 164, 0.2);
        max-width: 400px;
        height: 450px;
        border-radius: 5px;

        .title {
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

          .login-btn {
            cursor: pointer;
            width: 100%;
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

          .line {
            margin: 10px 0;
            h2 {
              width: 100%;
              text-align: center;
              border-bottom: 1px solid rgba(188, 188, 188, 0.5);
              color: rgb(188, 188, 188);
              line-height: 0.1em;
              font-weight: normal;
              font-size: 12px;
              margin: 10px 0 20px;

              span {
                background: #fff;
                padding: 0 10px;
              }
            }
          }

          .social-btn {
            margin: 40px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;

            .social {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`

const StyledForgotPassword = styled.section`
  .title {
    font-weight: bold;
    font-size: 15px;
  }
`

const Login = () => {
  //const siteTitle = data.site.siteMetadata?.title || `Title`

  const [toggle, setToggle] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [emailReset, setEmailReset] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [toggleModal, setToggleModal] = useToggle()

  const onToggle = () => setToggle(toggle => !toggle)
  const isToggleModal = () => setToggleModal(toggleModal => !toggleModal)

  const onSubmitPassword = event => {
    event.preventDefault()

    sendPasswordResetEmail(firebaseAuth, emailReset)
      .then(() => {
        Swal.fire({
          title: "Successfully",
          text: "Sucessfully Send the reset email",
          icon: "success",
        })
        setEmailReset("")
      })
      .catch(error => {
        Swal.fire({
          title: "Warning",
          text: error.message,
          icon: "warning",
        })
      })
  }

  const onSubmit = event => {
    event.preventDefault()

    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        Swal.fire({
          title: "Successfully",
          text: "Sucessfully Login",
          icon: "success",
        })
      })
      .catch(e => {
        if (e.code === "auth/user-not-found") {
          Swal.fire({
            title: "Warning",
            text: "this account is not yet register",
            icon: "warning",
          })
        }
      })
  }

  return (
    <>
      {toggleModal && (
        <Modal>
          <StyledForgotPassword>
            <span className="title">Forgot Password?</span>
            <p>
              Add your email to reset your password, we will send you an email
              in as short while
            </p>

            <form onSubmit={onSubmitPassword}>
              <input
                text="email"
                onChange={event => setEmailReset(event.target.value)}
                placeholder="Enter your email"
              />
              <div className="button-wrapper">
                <button
                  type="button"
                  onClick={isToggleModal}
                  className="cancel-button"
                >
                  cancel
                </button>
                <button className="submit-button">Submit</button>
              </div>
            </form>
          </StyledForgotPassword>
        </Modal>
      )}
      <LoginStyled>
        <div
          className="bg-image"
          style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${loginBackground})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="content">
            <header>
              <span>ISAT U Mental Health Website</span>
              <p>
                any change, even a change for the better, is always accompined
                by discomfort
              </p>
            </header>
            {toggle ? (
              <Register onToggle={onToggle} />
            ) : (
              <section className="login-form">
                <div className="title">
                  <span>Login</span>
                  <p>
                    Doesn't have an account yet?{" "}
                    <strong
                      role="sign up"
                      onKeyDown={onToggle}
                      onClick={onToggle}
                    >
                      Sign up
                    </strong>
                  </p>
                </div>
                <form onSubmit={event => onSubmit(event)}>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="input"
                      placeholder="Email here..."
                      onChange={event => setEmail(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="input"
                      placeholder="Password here..."
                      onChange={event => setPassword(event.target.value)}
                    />
                  </div>
                  <span className="forgot-password" onClick={isToggleModal}>
                    Forgot password?
                  </span>
                  <div>
                    <button type="submit" className="login-btn">
                      Login
                    </button>
                  </div>
                  {/* <div className="line">
                    <h2>
                      <span>or login with</span>
                    </h2>
                    <div className="social-btn">
                      <div className="social">
                        <Icon name="Google" width={30} height={30} />
                      </div>
                      <div className="social">
                        <Icon
                          name="Facebook"
                          width={30}
                          height={30}
                          fill="blue"
                        />
                      </div>
                    </div>
                  </div> */}
                </form>
              </section>
            )}
          </div>
        </div>
      </LoginStyled>
    </>
  )
}

export default Login
