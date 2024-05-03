import AboutCard from "../components/AboutCard"
import PageTitle from "../components/PageTitle"


function ContactPage() {
  return (
    <div className="container">
      <PageTitle>Coordonnées</PageTitle>
      <h1>Coordonnées.</h1>
      <div className='subheading'>Comment me contacter sur Internet et dans le monde réel.</div>
      <AboutCard />
    </div>
  )
}

export default ContactPage