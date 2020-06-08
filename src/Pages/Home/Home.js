import React, {Component} from 'react';
import Reviews from '../../Components/Reviews/Reviews';

import ClientLogos from '../../Components/ClientLogos/ClientLogos';

class Home extends Component {

    render(){
        return(
            <div>
                <h1>Home</h1>
                <Reviews />
                <ClientLogos />
            </div>
        )
    }
}

export default Home;