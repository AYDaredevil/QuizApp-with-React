import React, { Component}  from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <div className="container" id="cont">
                <Jumbotron className="jumbo">
                <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome to Quizapp</h1>
                                <h4> Where a smart answer won't get you fired!</h4>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;