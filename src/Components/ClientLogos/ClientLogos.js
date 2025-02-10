import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section `
    background-color: white;
    text-align: center;
    color: black;

    p {
        color: black;
    }
`

const Image = styled.img `
    padding: 1.25em;
    max-height: 5em;
    align-self: center;
`;

class ClientLogos extends Component {

    render(){
        return(
            <Section id="client-logos">
                <p className="lead text-center" id="happy-clients">Just a few of our happy clients...</p>
                <div>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-ccg.png" alt="Child Care Group Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-ctl.png" alt="Center for Transforming Lives Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-dma.png" alt="Dallas Museum of Art Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-dal-zoo.png" alt="Dallas Zoo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-commit.png" alt="Commit Partnership" ></Image>
                    {/* <Image className="img-fluid client-logos" src="./assets/images/logos/logo-dt.png" alt="Dura-Teach Logo" ></Image> */}
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-ddi.png" alt="Downtown Dallas Inc Logo" ></Image>
                    {/* <Image className="img-fluid client-logos" src="./assets/images/logos/logo-je.png" alt="Joshua Expeditions Logo" ></Image> */}
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-ntfb.png" alt="North Texas Food Bank Logo" ></Image>
                    {/* <Image className="img-fluid client-logos" src="./assets/images/logos/logo-ps.png" alt="Premier Services Logo" ></Image> */}
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-swmf.png" alt="Southwestern Medical Foundation Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-txwf.png" alt="Texas Womens Foundation Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-tex.png" alt="Tex Protects Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-vvf.png" alt="Verde Valle Foods Logo" ></Image>
                    {/* <Image className="img-fluid client-logos" src="./assets/images/logos/logo-concilio.png" alt="The Concilio Logo" ></Image> */}
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-everge.png" alt="eVerge Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-hoglund.png" alt="The Hoglund Foundation Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-outteach.png" alt="Out Teach Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-gsntx.png" alt="Girl Scouts Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-resourcecenter.png" alt="Resource Center Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-rosewood.png" alt="Rosewood Logo"></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-6floor.png" alt="Sixth Floor Logo"></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-seniorsource.png" alt="The Senior Source Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-drc.png" alt="Dallas Regional Chamber Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-perot.png" alt="Perot Museum" ></Image>
                    {/* <Image className="img-fluid client-logos" src="./assets/images/logos/logo-trintech.png" alt="Trintech Logo" ></Image> */}
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-tdf.png" alt="The Dallas Foundation Logo" ></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-unitedway.png" alt="United Way of Metropolitan Dallas Logo"></Image>
                    <Image className="img-fluid client-logos" src="./assets/images/logos/logo-wac.png" alt="World Affairs Council"></Image>
                </div>
            </Section>
        )
    }
}

export default ClientLogos;
