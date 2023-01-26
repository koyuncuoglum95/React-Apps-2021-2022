import React,{Component}  from "react";
import './calculator.css';
import Buttons from '../../components/Buttons/buttons';
import Results from '../../components/Results/result';

class Calculator extends Component {
    constructor() {
      super();
      this.state = ({
        result: ""
      });    
    }
  
    onClickHandler = (button) => {
      if(button === "=") {
        this.calculate();
      }
      else if(button ==="C") {
        this.reset();
      }
      else {
        this.setState({
          result: this.state.result + button
        });
      }
    };
  
    calculate() {
      try {
        this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""
        })
          } catch (e) {
            this.setState({
            result: "error"
        })
  
    }
    };
  
    reset() {
      this.setState({
        result: ""
      })
    };
  
    render() {
  
  
    return (
      <div>
      <Results result={this.state.result}/>
      <Buttons onClick={this.onClickHandler} />
      </div>
    );
    }
    
  }
  
  export default Calculator;