import React from 'react'
import { FaShopify, FaInstagram, FaWhatsapp, FaPinterest } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='subscription'>
                <h1 style={{ color: "black" }}>Get Exclusive Offers On Your Email</h1>
                <h6 style={{ color: "grey" }}>Subscribe to our newsletter and stay updates</h6>
                <div className='inp-btn'>
                    <form>
                    <input type="email" placeholder='Your email id' className='footer-input' />
                    <button>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='f-2'>
                <div className='footer-name'>
                    <div><FaShopify color='red' size='40' /></div>
                    <div><h1 style={{ color: "black" }}>SHOPPER</h1></div>
                </div>
                <div>
                    <pre>
                    Company  Offices  Product  About  Conatct 
                    </pre>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"2rem"}}>
                    <FaInstagram size='30'/>
                    <FaPinterest size='30'/>
                    <FaWhatsapp size='30'/>  
                </div>
                <div><h6 style={{marginTop:"2rem"}}>Copyright @ 2024 | All Rights Reserved</h6></div>
            </div>
        </div>
    )
}

export default Footer
