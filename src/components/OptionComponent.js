import { Button } from 'reactstrap';
import React, {Component} from 'react';

class Options extends Component {
    constructor(props){
        super(props);
        this.printAns  = this.printAns.bind(this);
        this.printOption = this.printOption.bind(this);
        this.state = {
            answer : "",
            count : 0
        };
    }
    printOption()
    {
        const print = this.props.options.map((option) => {
                if(this.state.answer === "")
                return(
                    <Button color="info" className="ml-3 mt-2" onClick = {() => {this.setState({
                        answer : option
                    })}}>
                        {option}
                    </Button>
                );
        });
        return (<div> {print} </div>)
    }

    printAns()
    {
        if(this.state.answer){
            if(this.state.count === 0)
            {
                this.props.check(this.state.answer, this.props.correct);
                this.setState({
                    count : 1
                });
            }
            if(this.state.answer === this.props.correct)
            return(<Button color = "success"> {this.state.answer} </Button>);
            else return (<Button color = "danger"> {this.state.answer} </Button>);
        }
        else return (<div> </div>);
    }
    render()
    {
        return (
            <div>
                {this.printOption()}
                {this.printAns()}
            </div>
        );
    }
}

export default Options;