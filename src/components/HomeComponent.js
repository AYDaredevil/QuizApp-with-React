import { Button} from "reactstrap";
import React, {Component} from "react";
import { Questions } from '../shared/questions';
import Options from './OptionComponent';

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
        var option = []
        const print = questions.map((question) => {
            return (
                <div className="questionBox">
                    <div className = "row mx-auto" > 
                            <h5>{question.question} </h5> 
                    </div> 
                    <div className = "row mx-auto">
                       <Options options={question.answers}/>
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
            <div>
                 {this.printName()}
                 <div className="row justify-content-md-center mt-3 mb-2">
                    <Button color="primary"> Submit </Button>
                 </div>
            </div>
        );
    }
}

export default Home;