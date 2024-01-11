import React from "react";
import './Footer.css';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="footer-links">
                    <div className="footer-links_div">
                        <h4>Contact Me at: 09268447780</h4>
                    </div>
                    <div className="footer-links_div">
                        <h4>For Business</h4>
                        <a>Coming Soon!</a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Partners</h4>
                        <a>Coming Soon!</a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Company</h4>
                        <a>Coming Soon!</a>
                    </div>
                    <div className="footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <a href="https://www.facebook.com/ejpp21"><p><BsFacebook/></p></a>
                            <a href="https://www.linkedin.com/in/earl-junior-piamonte-254980299/"><p><BsLinkedin/></p></a>
                            <a href="https://github.com/ejpiamonte"><p><BsGithub/></p></a>
                        </div>
                    </div>
                </div>
            </div>

          <hr></hr>
          <div className="footer-below">
            <div className="footer-coppyright">
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
            </div>
            <div className="footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
          </div>
        </div>
    )
}

export default Footer;