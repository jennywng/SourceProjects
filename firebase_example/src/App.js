import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCrDEtXUsNWODcVApGswy8dKilwy-qfUg0",
  authDomain: "sourceintroexample.firebaseapp.com",
  databaseURL: "https://sourceintroexample.firebaseio.com",
  projectId: "sourceintroexample",
  storageBucket: "sourceintroexample.appspot.com",
  messagingSenderId: "599372122063"
};
firebase.initializeApp(config);

submit = () => {
  /* set vs push?*/
  firebase
    .database()
    .ref("/")
    .set({
      input: this.state.input
    });
}

class App extends Component {
  componentDidMount() {
    var root = firebase.database().ref("/");    // put data in at the root
    root.on("value", snapshot => {              // looking for an data push w. on
      console.log(snapshot);
      if (snapshot && snapshot.val()) {
        this.setState({grabbedData: snapshot.val().input});
      }
    });
  }


  render() {
    return (
      <div className="App">
        <input>
        value = {this.state.input}
        onChange={e => {
          this.setState({ input: e.target.value});
        }}
        </input>
        <button onClick={() => this.submit()} >
          submit          
        </button>
        this data is from firebase: {this.state.grabbedData}
      </div>
    );
  }
}

export default App;
