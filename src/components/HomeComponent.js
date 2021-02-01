import { Button} from "reactstrap";
import React, {Component} from "react";
import { Questions } from '../shared/questions';
import Options from './OptionComponent';

class Home extends Component {

    constructor(props){
        super(props);
        this.printName = this.printName.bind(this);
        this.state = {
            Questions : Questions,
            FiveQuestion : [],
            cnt : 0
        };
    }
    printName()
    {
        var random = [];
        while(random.length < 5)
        {
            var num = Math.floor(Math.random()*this.state.Questions.length);
            if(!random.includes(num))
                random.push(num);
        }
        var questions = [];
        for(var i=0;i<5;i++)
            questions.push(this.state.Questions[random[i]]);
        if(this.state.FiveQuestion.length === 0)
            this.setState({
                FiveQuestion : questions
            });
        const print = this.state.FiveQuestion.map((question) => {
            return (
                <div className="questionBox">
                    <div className = "row mx-auto" > 
                            <h5>{question.question} </h5> 
                    </div> 
                    <div className = "row mx-auto">
                       <Options options={question.answers} check = {this.props.check} correct = {question.correct} />
                    </div>
                </div>
                )
            });
        return(
            <div>
              {print}
            </div>
        );
    }
    render()
    {   
        if(this.state.cnt == 0)
        return(
            <div>
                 {this.printName()}
                 <div className="row justify-content-md-center mt-3 mb-2">
                    <Button color="primary" onClick = {() => {this.setState({
                        cnt : 1
                    })}}> Submit </Button>
                 </div>
            </div>
        );
        else
        return(
            <div>
                <h1> You Got {this.props.count/2}/5 ! </h1>
            </div>
        );
    }
}

export default Home;