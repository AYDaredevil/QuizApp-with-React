import { Button } from 'reactstrap';
import React, {Component} from 'react';

class Options extends Component {
    constructor(props){
        super(props);
        this.state = {
            answer : ""
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
                )
        });
        return (<div> {print} </div>)
    }

    printAns()
    {
        console.log(this.state.answer);
        if(this.state.answer){
            return(<Button> {this.state.answer} </Button>);
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