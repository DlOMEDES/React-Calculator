import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    displayValue: '0'
  }

  inputDigit(digit) {
    const {displayValue} = this.state

    this.setState({
      displayValue: displayValue + digit
    })
  }

  render() {
    const {displayValue} = this.state

    return (
      <div className="App">
        <div className="calculator">
          <div className="calculator-display">{displayValue}</div>
          <div className="calculator-keypad">
            <div className="input-keys">
              <div className="function-keys">
                <button className="calculator-key key-clear">AC</button>
                <button className="calculator-key key-sign">±</button>
                <button className="calculator-key key-percent">%</button>
              </div>
              <div className="digit-keys">
                <button className="calculator-key key0" onClick={() => this.inputDigit(0)}>0</button>
                <button className="calculator-key keyDot">•</button>
                <button className="calculator-key key1" onClick={() => this.inputDigit(1)}>1</button>
                <button className="calculator-key key2" onClick={() => this.inputDigit(2)}>2</button>
                <button className="calculator-key key3" onClick={() => this.inputDigit(3)}>3</button>
                <button className="calculator-key key4" onClick={() => this.inputDigit(4)}>4</button>
                <button className="calculator-key key5" onClick={() => this.inputDigit(5)}>5</button>
                <button className="calculator-key key6" onClick={() => this.inputDigit(6)}>6</button>
                <button className="calculator-key key7" onClick={() => this.inputDigit(7)}>7</button>
                <button className="calculator-key key8" onClick={() => this.inputDigit(8)}>8</button>
                <button className="calculator-key key9" onClick={() => this.inputDigit(9)}>9</button>
              </div>            
            </div>
            <div className="operation-keys">
              <button className="calculator-key key-divide">÷</button>
              <button className="calculator-key key-multiply">*</button>
              <button className="calculator-key key-add">+</button>
              <button className="calculator-key key-subtract">-</button>
              <button className="calculator-key key-equals">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
