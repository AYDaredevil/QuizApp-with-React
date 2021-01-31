import React, {Component} from "react";
import Header from './HeaderComponent';
import Home from './HomeComponent';

class Main extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Home/>
            </div>
        );
    }
}

export default Main;