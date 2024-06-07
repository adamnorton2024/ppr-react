import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import './Footer.css';

const Foot = styled.footer `
    color: white;
    margin: 0px;
}
`



const Div = styled.div `
    padding-top: 2em;
    padding-left: 0em;
    padding-right: 0em;
    padding-bottom: 2em;
    opacity: 1;
    color: ${ props => {
        if (props.orange) return props.theme.colors.orange;
        if (props.light_blue) return props.them.colors.light_blue;
        if (props.medium_blue) return props.them.colors.medium_blue;
        if (props.dark_blue) return props.them.colors.dark_blue;
        if (props.bg_trans) return props.them.colors.bg_trans;
        if (props.bg_gray) return props.them.colors.bg_gray;
        }
    }
    
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
            copyrightYear: '1908'
        };

    }

    componentDidMount(){
        const todaysDate = new Date();
        const currentYear = todaysDate.getFullYear();
        this.setState({ copyrightYear: currentYear});
    }

    handleChange(event){
        this.setState({EMAIL: event.target.value})
    }

    render(){
        return(
            <ThemeProvider theme={theme}>
                <Foot id="footer-page">
                    <div className="footer-background">
                        <Div>
                            <div className="container">
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
                                            <A href="https://www.facebook.com/pprhr" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-3x px-2"></i></A>
                                            <A href="https://www.instagram.com/ppr_hr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x px-2"></i></A>
                                            <A href="https://www.linkedin.com/company/people-performance-resources-llc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x px-2"></i></A>
                                            {/* <A href="https://twitter.com/info_ppr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-3x px-2"></i></A> */}

                                        <div className="ml-form-embed"
                                            data-account="2289491:h4u9d5h6s1"
                                            data-form="2495333:y3r3i4">
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="text-center"><small>&copy; Copyright <span id="current-year">{this.state.copyrightYear}</span>, People Performance Resources - A Human Resources Solutions Firm. All rights Reserved.</small></p>
                                    </div>
                                </div>
                            </div>                                                                  
                        </Div>
                    </div>
                    
                </Foot>
            </ThemeProvider>

        )
    }
}

export default Footer;