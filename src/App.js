import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    if (!firebase.apps.length) {
    }
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
    
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true :
        return (
          <CardSection>
            <Button onPress={() => {
              firebase.auth().signOut()
            }}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large'/>
    }    
  }

  render() {
    return (
    <View>
      <Header headerText={'Authentication'} />
      {this.renderContent()}
    </View>
  );
  }
};

export default App;
