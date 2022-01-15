import React from 'react'
import info from '../img/footer.svg'

export const Footer = () => {
    return (
        
        <footer>
            <svg preserveAspectRatio='none' className='waze' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,218.7C672,224,768,224,864,202.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className='content_footer'>
                <img src={info}  alt='footer' className='imgFooter'/>

                <div >

                    <p className='space'>Carrera 123 # 45 - 67. Oficina: 89</p>
                    <p  className='space'>Colombia</p>
                    <p className="info_footer">About us</p>
                    <p className="info_footer">History</p>
                </div>

                 <div className="icons">

                    <p className='info_footer'><i className='bx bxl-facebook '></i></p>
                    <p className='info_footer'><i className='bx bxl-instagram-alt'></i></p>
                    <p className='info_footer'><i className='bx bxl-linkedin ' ></i></p>
                    <p className='info_footer'><i className='bx bxl-twitter ' ></i></p>
                </div>

            </div>
        </footer>
    )
}
