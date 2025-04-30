import React from 'react'
import Cover from '../../components/Cover/Cover'
import contactBannerImage from "../../../public/contact/banner.jpg"
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import InfoCards from './InfoCards'
import ContactForm from './ContactForm'
import { useFirebaseAuth } from '../../hooks/useAuth'

const Contact = () => {
  const {user} = useFirebaseAuth();
 
  console.log(user)
  return (
    <div>
        <Cover image={contactBannerImage} title1={"CONTACT US"} title2={"Would you like to try a dish?"}></Cover>
        <SectionHeading title1={"---Visit Us---"} title2={"OUR LOCATION"}></SectionHeading>
        <InfoCards></InfoCards>
        <SectionHeading title1={"---Send Us a Message---"} title2={"CONTACT FORM"}></SectionHeading>
        {
          user ? <ContactForm name={user.displayName} email={user.email}></ContactForm> : <ContactForm></ContactForm>
        }
    </div>
  )
}

export default Contact