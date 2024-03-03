import ContactForm from "../form/contactForm"

// This component will be used for generic pages such as Contact Page etc.
export default async function Generic({ data }) {
  if (data) {
    switch (data.fields.type) {
      case "Contact Form":
        return <ContactForm data={data} />
      default:
        return null
    }
  } else {
    return null
  }
}