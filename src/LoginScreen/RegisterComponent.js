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

class RegisterComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.inputWrap}>
            <Text style={styles.inputLeftText}>手机号</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} />
            <TouchableOpacity activeOpacity={.5} style={styles.inputCode}>
              <Text style={{fontSize: 10}}>获取验证码</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.inputLeftText}>验证码</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.buttonWrap} activeOpacity={.5}>
            <Text style={styles.buttonText}>注册</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH - 20,
    // justifyContent: 'space-between',
  },
  inputWrap: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputLeftText: {
    position: 'absolute',
    color: '#333'
  },
  inputCode: {
    position: 'absolute',
    right: 4,
  },
  input: {
    flex: 1,
    padding: 0,
    paddingLeft: 42,
    paddingRight: 42,
    borderBottomWidth: .5,
    borderBottomColor: '#ccc',
    textAlign: 'center'
  },
  buttonWrap: {
    height: 38,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4b6',
  },
  buttonText: {
    color: '#fff'
  }
})

export default RegisterComponent