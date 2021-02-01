import React, {Component} from "react";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import { check } from "../redux/actionCreater";

const mapStateToProps = (state) => {
	return{
	    count : state.correct
	}
}
const mapDispatchToProps = (dispatch) => ({
    check : (answer, option) => dispatch(check(answer,option))
});

class Main extends Component {
    render() {
        console.log(this.props.count);
        return (
            <div className="container">
                <Header />
                <Home 
                    count = {this.props.count}
                    check = {this.props.check} />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));