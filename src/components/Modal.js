import React from "react"
import styled from "styled-components"

const ModalStyled = styled.section`
  position: relative;

  .modal-wrapper {
    z-index: 50;
    position: fixed;
    background: rgba(58, 56, 63, 0.5);
    width: 100%;
    height: 100%;

    .modal-card {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .modal-content {
        background: #fff;
        width: 500px;
        padding: 30px 50px;
        border-radius: 5px;

        .title {
          font-weight: bold;
          font-size: 20px;
          text-align: center;
          margin-bottom: 10px;
        }

        p {
          opacity: 0.5;
        }

        input {
          font-size: 15px;
          width: 100%;
          border-radius: 5px;
          padding: 10px;
          outline: none;
          background: rgba(0, 174, 164, 0.1);
          border: none;
          margin-bottom: 10px;
        }

        button {
          outline: none;
          border: none;
        }

        .button-wrapper {
          margin: 20px 0 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 5px;

          .cancel-button {
            background: transparent;
            border: 2px solid #ff871e;
            padding: 10px 20px;
            font-size: 12px;
            border-radius: 5px;
            font-weight: bold;
            color: #ff871e;
            cursor: pointer;
          }

          .submit-button {
            border: 2px solid #ff871e;
            background: #ff871e;
            padding: 10px 20px;
            font-size: 12px;
            border-radius: 5px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;

            &:hover {
              background: rgb(255, 135, 30, 0.5);
            }
          }
        }

        /* 
        form {
          text-align: center;

          input {
            width: 100%;
            border-radius: 5px;
            padding: 10px;
            outline: none;
            background: rgba(0, 174, 164, 0.1);
            border: none;
            margin-bottom: 10px;
          }

          textarea {
            width: 100%;
            border-radius: 5px;
            padding: 10px;
            outline: none;
            background: rgba(0, 174, 164, 0.1);
            border: none;
          }

          .button-wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 5px;
            margin: 10px 0;

            button {
              outline: none;
              border: none;
            }

            .cancel-button {
              background: transparent;
              border: 2px solid #ff871e;
              padding: 10px 20px;
              font-size: 12px;
              border-radius: 5px;
              font-weight: bold;
              color: #ff871e;
              cursor: pointer;
            }

            .submit-button {
              background: #ff871e;
              padding: 10px 20px;
              font-size: 12px;
              border-radius: 5px;
              font-weight: bold;
              color: #fff;
              cursor: pointer;

              &:hover {
                background: rgb(255, 135, 30, 0.5);
              }
            }
          }
        } */
      }
    }
  }
`

export default function Modal({ children }) {
  return (
    <ModalStyled className="relative">
      <div className="modal-wrapper">
        <div className="modal-card">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </ModalStyled>
  )
}
