import React from 'react';

const Features = () => {
    return (
        <>
            <div className="features-area pt-50 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>User Friendly</h3>
                                <p>
                                    Designed as best as possible for user convenience in terms of appearance and experience and also SEO Friendly.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg2">
                                    <i className="ri-24-hours-line"></i>
                                </div>
                                <h3>24 Hours Support</h3>
                                <p>
                                    Our Team is always ready to help with any problems experienced or consultation via e-mail, telephone, and chat.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg3">
                                    <i className="ri-fingerprint-line"></i>
                                </div>
                                <h3>Security Protected</h3>
                                <p>
                                    Security has always been our priority by trying our best for the Security of an application.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6 xsw-100 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg4">
                                    <i className="ri-vip-diamond-line"></i>
                                </div>
                                <h3>Tech Stack</h3>
                                <p>
                                    We provide a guarantee on the website, if there are problems with the application, we are ready to make repairs for free.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;
