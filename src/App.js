import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: '0',
      operator: '',
      inputStored: 0,

    }
  }


  handleClick = (event) => {
    this.setState ({
      display: this.state.display += event.target.value,
    })
  }

  reset = () => {
    this.setState ({
      display: "0",
    })
  }

  handleOperation = (event)=> {
    this.setState ({
      inputStored: Number(this.state.display),
      display: '',
      operator: event.target.value
   })

}

handleNegNum = () => {
  this.setState ({
    display: Number(this.state.display) * - 1,
  })
}

handlePercent = () => {
  this.setState ({
    display: Number(this.state.display) / 100,
  })
}


handleEqual = () => {
 if (this.state.operator === "/") {
   this.setState ({
     display: this.state.inputStored / Number(this.state.display),
   })
  }
  else if (this.state.operator === '+') {
    this.setState ({
      display: this.state.inputStored + Number(this.state.display),
    })
  }
  else if (this.state.operator === '*') {
    this.setState ({
      display: this.state.inputStored * Number(this.state.display),
    })
  } else if (this.state.operator === '-') {
    this.setState ({
      display: this.state.inputStored - Number(this.state.display),
    })
  }
}

  


  render() {
    const {display} = this.state;
    return (
      <>

      <div className='display'>
      {Number(display).toLocaleString()}
        </div>

      <div className="num-buttons">
        <button value='A/C' onClick={this.reset}>A/C</button>
        <button value='+/-' onClick={this.handleNegNum}>+/-</button>
        <button value='%' onClick={this.handlePercent}>%</button>
        <button value='/' onClick={this.handleOperation}>/</button>
        <button value='7' onClick={this.handleClick}>7</button>
        <button value='8' onClick={this.handleClick}>8</button>
        <button value='9' onClick={this.handleClick}>9</button>
        <button value='*' onClick={this.handleOperation}>*</button>
        <button value='4' onClick={this.handleClick}>4</button>
        <button value='5'onClick={this.handleClick}>5</button>
        <button value='6' onClick={this.handleClick}>6</button>
        <button value='-' onClick={this.handleOperation}>-</button>
        <button value='1' onClick={this.handleClick}>1</button>
        <button value='2' onClick={this.handleClick}>2</button>
        <button value='3' onClick={this.handleClick}>3</button>
        <button value='+' onClick={this.handleOperation}>+</button>
        <button className='zero' value='0' onClick={this.handleClick}>0</button>
        <button value='.' onClick={this.handleClick}>.</button>
        <button value='=' onClick={this.handleEqual}>=</button>
      </div>Division
      </>
    );
  }
}

export default App;
