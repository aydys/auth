import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  LoginForm: {
    screen: LoginForm,
  },
  Dashboard: {
    screen: Dashboard
  }
});

export default createAppContainer(AppNavigator);
