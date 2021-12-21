// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-content">
                        <Link href="/">
                            <a className="logo">
                                <img src="/images/black.png" alt="logo" />
                            </a>
                        </Link>

                        <ul className="social-links">
                            <li>
                                <a href="https://www.facebook.com/" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" target="_blank">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.messenger.com/" target="_blank">
                                    <i className="ri-messenger-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/" target="_blank">
                                    <i className="ri-github-fill"></i>
                                </a>
                            </li>
                        </ul>

                        <p className="copyright">
                            Copyright &copy; {currentYear} All Rights Reserved by 
                            <a href="https://zuran.id/" target="_blank"> Raven Media</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;