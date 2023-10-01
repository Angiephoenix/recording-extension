import React from 'react'
import './File.css'
import FileContent from './fileContent/FileContent'
import Navbar from '../../../ui/navbar/Navbar'
import Footer from '../../../ui/footer/Footer'

const File = () => {
    return (
        <div className="file">
            <header>
                <Navbar/>
            </header>
            <main>
                <FileContent/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    )
}

export default File