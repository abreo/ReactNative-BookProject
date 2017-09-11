import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'


class LoginScreen extends Component {
  constructor() {
    super()
    this.state = {
      status: 'login'
    }
  }
  handleStatusChange = (status) => () => {
    this.setState({
      status
    })
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Image source={require('./logo.png')} style={styles.logo} />
        <View style={styles.loginTitleWrap}>
          <TouchableOpacity activeOpacity={.5} onPress={this.handleStatusChange('login')}>
            <Text style={[styles.loginTitle, { color: this.state.status === 'login' ? '#4b6' : '#999' }]}>登陆</Text>
          </TouchableOpacity>
          <Text style={{ paddingLeft: 12, paddingRight: 12, color: '#ccc' }}>|</Text>
          <TouchableOpacity activeOpacity={.5} onPress={this.handleStatusChange('register')}>
            <Text style={[styles.loginTitle, { color: this.state.status === 'register' ? '#4b6' : '#999' }]}>注册</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainWrp}>
          {this.state.status === 'login' ? <LoginComponent {...this.props}/> : <RegisterComponent {...this.props}/>}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#fff'
  },
  logo: {
    width: 50,
    height: 50,
  },
  loginTitleWrap: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginTitle: {
    fontSize: 12
  },
  mainWrp: {
    marginTop: 30,
    // borderWidth: 1,
    // borderColor: '#f00',
    paddingBottom: 120
  }
})


export default LoginScreen