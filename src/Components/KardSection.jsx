import React from 'react'
import CardSection from './CardSection';
import logo from '../assets/image.jpg'
import image from '../assets/girl.jpg'
import img from '../assets/logo.jpg'
import pic from '../assets/backImg.jpg'
import picture from '../assets/picture.jpg'
import pics from '../assets/photo.jpg'

const KardSection = () => {
  return (
    <section className='bg-gray-200 lg:pt-0 pt-32'>
        <div className=' grid lg:grid-cols-3 gap-5 grid-cols-1 lg:mx-28 mx-4 md:grid-cols-2'>
        <CardSection
        img={logo} 
        course="HTML5/CSS3 Instructor"
        name="Boyedeola Ogunrinde"
        about="A front-end specialist with 8 years experience in building responsive, accessible websites for agencies and startups." />
        

        <CardSection  
        img={image}
        course="Digital Marketing Instructors" 
        name="Omolola Alabi"
        about="Lola is a data-driven marketer with dexterity spanning SEO, paid social and conversion-rate optimization."
        />

        <CardSection 
        img={img}
        course="WordPress Instrutors"
        name="Fadahunsi John"
        about="Meet our wordpress developer with hands-on experience in building custom themes for plugins, e-commerce solutions for agencies and small businesses."
       />

        <CardSection 
        img={pic}
        course="JavaScript Development Instructors"
        name="Amofe Emmanuel"
        about="Meet our js instructor, with 6 years solid experience. He's a certified Node.js developer and multiple contributions to open-source projects and scalable web applications."
       />

        <CardSection 
        img={picture}
        course="UI/UX Instructors"
        name="Sulaimon Faishat"
        about="Faishat is a seasoned UI/UX designer with 5 years of experience. Her teaching sytles blends real-world case studies with hands-on design flair. "
       />

        <CardSection 
        img={pics}
        course="Cybersecurity Instructors"
        name="Olamide Adegboyega"
        about="Olamide is a certified ethical hacker and security analyst with years of experience in protecting enterprise networks and cloud networks."
       />

    </div>
    </section>
  )
}

export default KardSection;