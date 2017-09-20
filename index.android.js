/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import App from './src/app.android'

// const BookProject = () => <App />
class BookProject extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('BookProject', () => BookProject)
