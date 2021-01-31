import { Button } from "reactstrap";
import React, {Component} from "react";
import { Questions } from '../shared/questions';

class Home extends Component {

    constructor(props){
        super(props);
        this.printName = this.printName.bind(this);
        this.state = {
            Questions : Questions
        };
    }
    printName()
    {
        var random = [];
        while(random.length < 5)
        {
            var num = Math.floor(Math.random()*this.state.Questions.length);
            if(!random.includes(num))
            {
                random.push(num);
                console.log(num);
            }
        }
        var questions = [];
        for(var i=0;i<5;i++)
            questions.push(this.state.Questions[random[i]]);
        const options = (answers) => answers.map((answer) => {
            return(<div className="col">
                        <Button color="info"> {answer } </Button> 
                    </div>);
        });
        const print = questions.map((question) => {
            return (
                <div className="container">
                    <div className = "row mx-auto" > {question.question} </div> 
                    <div className = "row">
                       {options(question.answers)}
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
        return(
            <div className="container">
                 {this.printName()}
                 <div className="row justify-content-md-center mt-3">
                    <Button color="primary"> Submit </Button>
                 </div>
            </div>
        );
    }
}

export default Home;