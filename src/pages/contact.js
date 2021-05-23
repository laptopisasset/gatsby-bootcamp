import React from "react"

import Footer from "../components/footer"

import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/@SoundharNatara1" target="_blank">
          @SoundharNatara1
        </a>
        on Twitter
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
