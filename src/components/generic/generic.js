import React from "react"
import ContactForm from "../contactForm"

// This component will be used for generic pages such as Contact Page etc.
const Generic = ({ data }) => {
  if (data) {
    switch (data.type) {
      case "Contact Form":
        return <ContactForm data={data} />

      default:
        return null
    }
  } else {
    return null
  }
}


export default Generic;