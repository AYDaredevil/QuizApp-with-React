import React, {Component} from "react";
import { Questions } from '../shared/questions';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            Questions : Questions
        };
    }
    render()
    {

        const print = this.state.Questions.map((Question) => {
            return(
                <div container= "row">
                    <p> {Question.question} </p>
                </div>
            );
        });
        return(
            <div className="container">
                {print}
            </div>
        )
    }
}

export default Home;