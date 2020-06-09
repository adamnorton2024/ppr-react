import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import Button from 'react-bootstrap/Button';
import './Footer.css';

const Foot = styled.footer `
    background-image: url('/assets/images/bg_rings.jpg');
    background-repeat: no-repeat;
    background-position: bottom-center;
    background-size: cover;
    margin: 0px;
    padding-top: 2em;
    padding-left: 0em;
    padding-right: 0em;
    padding-bottom: 2em;
`

const Div = styled.div `
    color: ${ props => {
        if (props.orange) return props.theme.colors.orange;
        if (props.light_blue) return props.them.colors.light_blue;
        if (props.medium_blue) return props.them.colors.medium_blue;
        if (props.dark_blue) return props.them.colors.dark_blue;
        if (props.bg_trans) return props.them.colors.bg_trans;
        if (props.bg_gray) return props.them.colors.bg_gray;
    }}
`

const Span = Div.withComponent("span");
const A = styled.a `
    color: ${props => props.theme.colors.white};
    &:hover {
    color: ${props => props.theme.colors.orange};
  }

    .fab{
        font-size: 2em;
        margin-left: .15em;
        margin-right: .15em;
    }
`

class Footer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            copyrightYear: ''
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        const todaysDate = new Date();
        const currentYear = todaysDate.getFullYear();
        this.setState({ copyrightYear: currentYear});
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
                <Foot id="footer-page">
                    <Div className="Container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 text-center">
                                <p className="lead">HUMAN RESOURCES SOLUTIONS WITH A <Span orange>PERSONAL TOUCH</Span></p>
                                <img className="img-fluid" src="/assets/images/wbe-seal.png" alt="certified women owned business seal" />
                            </div>

                            <div className="col-lg-4 col-sm-12 text-center"><p className="lead">MAILING ADDRESS</p>
                                <div className="row">
                                    <div className="col-12"><p className="lead">
                                        <Span orange>1914 Skillman St.<br />
                                            Ste. 110153<br />
                                            Dallas, TX 75206
                                        </Span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 text-center"><p className="lead">FOLLOW US ON <Span orange>SOCIAL MEDIA</Span></p>
                                <A href="https://www.facebook.com/pprhr" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></A>
                                <A href="https://www.instagram.com/ppr_hr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></A>
                                <A href="https://www.linkedin.com/company/people-performance-resources-llc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></A>
                                <A href="https://twitter.com/info_ppr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></A>


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
                                                <Button className="button-footer" as="input" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" block />{' '}
                                                {/* <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button-footer block" /> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                                {/* <!--End mc_embed_signup--> */}


                    </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="text-center"><small>&copy; Copyright <span id="current-year" dangerouslySetInnerHTML={{__html: this.state.copyrightYear}}></span>, People Performance Resources - A Human Resources Solutions Firm. All rights Reserved.</small></p>
                            </div>
                        </div>
                    </Div>
                </Foot>
            </ThemeProvider>
        )
    }
}

export default Footer;