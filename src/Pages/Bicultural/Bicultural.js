import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../../Config/Theme";
import BiHeader from "./BiHeader/BiHeader";
import SpanishSpeaking from './SpanishSpeaking/SpanishSpeaking';
import HispanicOwned from './HispanicOwned/HispanicOwned';
import TalentAcquisition from './TalentAcquisition/TalentAcquisition';


const Div = styled.div `
    .jumbotron{
        background-color: transparent;
        margin: 0px;
        padding-top: 0px;
        padding-bottom: 1em;
        h1{
            color: ${props => props.theme.colors.light_blue};
        }
    }
`


class Bicultural extends Component {

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Div>
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-1">Services</h1>
                            </div>
                        </div>
                    </Div>
                </ThemeProvider>
                <BiHeader />
                <SpanishSpeaking />
                <HispanicOwned />
                <TalentAcquisition />
            </div>
        )
    }
}

export default Bicultural;