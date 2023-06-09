import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {RiInstagramFill} from 'react-icons/ri';
import {FaFacebookF,FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-md-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5'>
                    <span>Get connected on social networks:</span>
                </div>

                <div>
                    <Link to='' className='me-4 text-dark'>
                        <FaFacebookF/>
                    </Link>
                    <Link to='' className='me-4 text-dark'>
                        <FaTwitter/>
                    </Link>
                    <Link to='' className='me-4 text-dark'>
                       <FcGoogle/>
                    </Link>
                    <Link to='' className='me-4 text-dark'>
                       <RiInstagramFill/>
                    </Link>
                    <Link to='' className='me-4 text-dark'>
                       <FaLinkedin/>
                    </Link>
                    <Link to='' className='me-4 text-dark'>
                       <FaGithub/>
                    </Link>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol
                             md={4}
                             lg={3}
                             xl={3}
                            className='mx-auto mb-4'
                        >
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Angular
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    React
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Vue
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Laravel
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md="3"
                            lg="2"
                            xl="2"
                            className='mx-auto mb-4'
                        >
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Pricing
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Settings
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Orders
                                </Link>
                            </p>
                            <p>
                                <Link to='#!' className='text-dark'>
                                    Help
                                </Link>
                            </p>
                        </MDBCol>

                        <MDBCol
                            md={4}
                            lg={3}
                            xl={3}
                            className='mx-auto mb-md-0 mb-4'
                        >
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <Link className='text-dark fw-bold' to='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </Link>
            </div>
        </MDBFooter>
    );
}
export default Footer;