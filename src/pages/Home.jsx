import React from 'react'
import Header from '../components/header/Header'
import About from '../components/main/About'
import Service from '../components/main/Service'
import Projects from '../components/main/Projects'
import Contact from '../components/main/Contact'
import Footer from '../components/footer/Footer'
import Partners from '../components/main/Partners'

const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Service />
            <Projects />
            <Partners/>
            <Contact />
            <Footer />
        </main>
    )
}

export default Home