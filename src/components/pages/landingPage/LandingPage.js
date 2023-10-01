import React from 'react'
import './LandingPage.css'
import Navbar from '../../../ui/navbar/Navbar'
import Intro from './intro/Intro'
import Features from './features/Features'
import HowItWorks from './howItWorks/HowItWorks'
import Footer from '../../../ui/footer/Footer'


const LandingPage = () => {
    return (
        <div className="landingPage">
            <header>
                <Navbar/>
            </header>
            <main>
                <Intro/>
                <Features/>
                <HowItWorks/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default LandingPage;