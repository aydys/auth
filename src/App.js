import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common/header';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyB9un-cJB1n42nKJhFhawlAIkC4T_arEGg",
        authDomain: "authentication-a4282.firebaseapp.com",
        databaseURL: "https://authentication-a4282.firebaseio.com",
        projectId: "authentication-a4282",
        storageBucket: "authentication-a4282.appspot.com",
        messagingSenderId: "455286117808",
        appId: "1:455286117808:web:a65ee293a78d529bcdb275",
        measurementId: "G-1794XNQ1XZ"
      });
    }
  }

  render() {
    return (
    <View>
      <Header headerText={'Authentication'} />
      <LoginForm />
    </View>
  );
  }
};

export default App;
