import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    


    render(){
        return(
            <footer id="footer-page">
                <div className="Container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 text-center">
                            <p className="lead">HUMAN RESOURCES SOLUTIONS WITH A <span className="footer-span">PERSONAL TOUCH</span></p>
                            <img className="img-fluid" src="/assets/images/wbe-seal.png" alt="certified women owned business seal" />
                        </div>

                        <div className="col-lg-4 col-sm-12 text-center"><p>MAILING ADDRESS</p>
                            <div className="row">
                                <div className="col-12"><p className="lead">
                                    <span className="footer-span">1914 Skillman St.<br />
                                        Ste. 110153<br />
                                        Dallas, TX 75206
                                    </span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 text-center"><p className="lead">FOLLOW US ON <span className="footer-span">SOCIAL MEDIA</span></p>
                            <a className="fab-link" href="https://www.facebook.com/pprhr" target="_blank" rel="noopener noreferrer"><i className="footer-fab fab fa-facebook-square"></i></a>
                            <a className="fab-link" href="https://www.instagram.com/ppr_hr/" target="_blank" rel="noopener noreferrer"><i className="footer-fab fab fa-instagram"></i></a>
                            <a className="fab-link" href="https://www.linkedin.com/company/people-performance-resources-llc/" target="_blank" rel="noopener noreferrer"><i className="footer-fab fab fa-linkedin"></i></a>
                            <a className="fab-link" href="https://twitter.com/info_ppr/" target="_blank" rel="noopener noreferrer"><i className="footer-fab fab fa-twitter-square"></i></a>


                            {/* <!-- Begin Mailchimp Signup Form --> */}
                    
                            <div className="mt-3" id="mc_embed_signup">
                                <form action="https://pprhr.us14.list-manage.com/subscribe/post?u=ada12927bc1a306e7f4445d35&amp;id=a5d48d9a3e"method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"novalidate >
                                    <div id="mc_embed_signup_scroll">
                                        <p className="lead">SIGN-UP for NEWS and UPDATES</p>
                                        <input type="email" value="" name="EMAIL" className="email mt-1" id="mce-EMAIL" placeholder="email address" required />
                                                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                            <input type="text"name="b_ada12927bc1a306e7f4445d35_a5d48d9a3e" tabindex="-1" value="" />
                                        </div>
                                        <div className="clear mt-1">
                                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button-footer" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                                            {/* <!--End mc_embed_signup--> */}


                </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;