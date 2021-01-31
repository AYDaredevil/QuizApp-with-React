import React, { Component}  from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {
        return(
            <div className="container">
                <Jumbotron>
                        <div className="row">
                            <p> Every One Loves Sport and Everyone Loves Quiz </p>
                        </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Header;