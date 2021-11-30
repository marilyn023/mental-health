import React from "react"
import { collection, setDoc, firestore, doc } from "../config/firebase"
import swal from "sweetalert2"
export default function Modal({ id, openFeedback }) {
  const [email, setEmail] = React.useState("")
  const [description, setDescription] = React.useState("")

  const onSubmit = async event => {
    event.preventDefault()
    const docData = {
      articleId: id,
      email,
      description,
      date_created: new Date(),
    }

    const feedbackRef = doc(collection(firestore, "feedback"))

    await setDoc(feedbackRef, docData).then(() => {
      swal.fire({
        title: "Success",
        text: "Thank you for giving us feedback",
        icon: "success",
      })
      openFeedback()
    })
  }

  return (
    <section className="relative">
      <div className="fixed z-10 bg-gray-900 bg-opacity-50 w-full h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white w-96 px-6 py-8 rounded-lg">
            <span className="font-bold text-2xl text-center mb-4">
              Feedback form
            </span>
            <p className="text-gray-400">
              Please complete the following form and help us to improve our
              costumer experiences
            </p>
            <form onSubmit={event => onSubmit(event)} className="text-center">
              <div className="mb-2"></div>
              <div>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  className="w-full rounded-lg p-2 bg-gray-100 my-2 outline-none"
                  placeholder="Email..."
                />
              </div>
              <div>
                <textarea
                  required
                  className="bg-gray-100 rounded-lg p-2 border-2 border-gray-100 outline-none  w-full"
                  onChange={event => setDescription(event.target.value)}
                  value={description}
                  placeholder="Some Feedback..."
                  cols={50}
                  rows={5}
                ></textarea>
              </div>
              <div className="text-right flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={openFeedback}
                  className="border border-primary outline-none hover:opacity-80 rounded-lg py-1 w-28 text-center text-primary font-bold my-4"
                >
                  cancel
                </button>
                <button className="bg-primary outline-none hover:opacity-80 rounded-lg py-1 w-28 text-center text-white font-bold my-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
