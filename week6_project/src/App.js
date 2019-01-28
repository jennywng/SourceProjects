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


class App extends Component {
  render() {
    return (

    );
  }
}

export default App;
