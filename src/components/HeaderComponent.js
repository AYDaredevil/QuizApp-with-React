import React, { Component}  from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <div className="title">
                    Quizapp <br />
                    Where a smart answer won't get you fired!
            </div>
        );
    }
}

export default Header;