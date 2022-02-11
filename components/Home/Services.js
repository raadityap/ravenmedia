import React from 'react';
import Link from 'next/link';

const KeyFeatures = () => {
    return (
        <>
            <div className="features-area ptb-100 bg-F7F7FF" id="service">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">How Can We Help You?</span>
                        <h2 className="title-features">Our Services</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon">
                                    <i className="ri-smartphone-line"></i>
                                </div>
                                <h3>App Development</h3>
                                <p>
                                    We are experienced in making mobile apps for IOS and Android, and we are ready with your ideas.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg2">
                                    <i className="ri-global-line"></i>
                                </div>
                                <h3>Web Development</h3>
                                <p>
                                    Digitize your company's business and grow your business further with us.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg3">
                                    <i className="ri-shopping-cart-line"></i>
                                </div>
                                <h3>E - Commerce</h3>
                                <p>
                                    Overcome geographic limitations and reach new potential customers at a lower cost.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg4">
                                    <i className="ri-brush-line"></i>
                                </div>
                                <h3>UI / UX Design</h3>
                                <p>
                                    Guide them through a seamless user experience with a great interface.
                                </p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
                            <div className="single-features-item">
                                <div className="icon bg5">
                                    <i className="ri-cloud-line"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>
                                    We will help you increase your traffic and sales to a wider audience.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default KeyFeatures;
