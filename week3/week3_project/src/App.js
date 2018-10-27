import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Buttons from same directory
import Buttons from "./Buttons"

class App extends Component {
  state = {
    index: 0,
    quotes: ["hello world", "a", "b"],
    quote: ""
  }

//  displayQuote = index => {
//   let newQuote = this.state.quotes[this.state.index];
//   this.setState({quote : newQuote});
//   let newIndex = this.state.index < this.state.quotes.length ? this.state.index+= 1 : 0;
//   this.setState({index : newIndex});
// };

  // render() {
  //   return (
  //     <div className="App">
  //     {/** {} tell app to read javascript, not html*/} 
  //       {this.state.quote}
  //       <div>
  //         <button onClick={() => this.displayQuote(this.state.index)}>
  //           click me!
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // pass these functions down to Buttons so that the buttons can change the state of App.js
  next=() => {
    this.setState({
      // modulo to wrap around indices
      index: (this.state.index + 1) % this.state.quotes.length
    });
  };
  previous=() => {
    if (this.state.index===0){
      this.setState({
        index: this.state.quotes.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  updateUserQuote = quote => {
    this.setState({
      userInput: 

    });
  }
  addQuote = () => {
    this.setState({
      
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.quotes[this.state.index]}
        <div>
          {/* <button onClick={() => this.next()}>
            previous
          </button>
          <button onClick={() => this.next()}>
            next
          </button> */}
          <Buttons 
            index={this.state.index}
            previous={() => this.previous}
            next={() => this.next()}
          />
          <input
          value = {this.state.userInput}
            onChange={e => {
              this.updateUserQuote(e.target.value);
              console.log(e.target.value);
            }}
          />

          <button onClick=()

        </div>
      </div>
    );
  }
}

export default App;
