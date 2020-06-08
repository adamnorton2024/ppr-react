import React, {Component} from 'react';
import Reviews from '../../Components/Reviews/Reviews';
import './Home.css';
import ClientLogos from '../../Components/ClientLogos/ClientLogos';

class Home extends Component {

    render(){
        return(
            <div>
                <div className="jumbotron jumbotron-fluid pt-0 pb-0 mb-0">
                    <div className="row mx-0">
                        <div className="col-md-7" id='ppr-logo'>
                            <img className='img-fluid' src="./assets/images/PPR.png" alt="PPR Logo" />
                        </div>
                        <div className="col-md-5" id='think-be'>
                            <img className='img-fluid' src="./assets/images/img-thinkdiff-bediff.png" alt="Think Different Be Different" />
                        </div>
                    </div>
                </div>
                <Reviews />
                <ClientLogos />
            </div>
        )
    }
}

export default Home;