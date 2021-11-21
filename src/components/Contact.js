import React from "react"

export default function Contact() {
  return (
    <section className="py-32 text-center w-96 mx-auto" id="contact">
      <h1 className="font-bold text-4xl text-secondary">Connect with us.</h1>
      <p className="opacity-40 my-1.5">
        If you have problems, or situation that you cant really handle, you can
        directly message us by clicking this button below
      </p>
      <div className="my-10 text-center">
        <button className="bg-primary px-8 py-2 rounded-md text-white hover:opacity-50">
          Contact us
        </button>
      </div>
    </section>
  )
}
