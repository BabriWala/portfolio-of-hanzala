import Image from 'next/image'
import Hero from "../components/Hero/Hero"
import Contact from '../components/Contact/Contact'
import Footer from "../components/Footer/Footer"


export default function Home() {
  return (
      <header className=" mr-16 mb-80px">
       <Hero></Hero>
       <Contact></Contact>
       <Footer></Footer>
      </header>
  )
}
