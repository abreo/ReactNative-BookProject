import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'

function fn() {

}
fn()

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

class LoginComponent extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.inputWrap}>
            <Text style={styles.inputLeftText}>手机号</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} />
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.inputLeftText}>密码</Text>
            <TextInput underlineColorAndroid="transparent" style={styles.input} />
            <TouchableOpacity style={styles.inputRight} activeOpacity={.5}>
              <Text style={{ fontSize: 10, color: '#999' }}>忘记密码</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigate('AppStack')} style={styles.buttonWrap} activeOpacity={.5}>
            <Text style={styles.buttonText}>登陆</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wxLoginWrap}>
          <View style={styles.wxLoginTitleWrap}>
            <View style={styles.wxLoginTemp}></View>
            <Text style={styles.wxLoginTitleText}>第三方登陆</Text>
          </View>
          <TouchableOpacity style={styles.wxLoginButtonWrap} activeOpacity={.5}>
            <Image source={require('./wx.png')} style={styles.wxLoginLogo} />
            <Text style={{ color: '#4b6' }}>微信登陆</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH - 20,
    justifyContent: 'space-between',
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
  inputRight: {
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
  },
  wxLoginWrap: {
    alignItems: 'center'
  },
  wxLoginTitleWrap: {
    width: 140,
    height: 30,
    // borderWidth: 1,
    // borderColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wxLoginTemp: {
    position: 'absolute',
    width: 140,
    borderBottomWidth: .5,
    borderColor: '#ccc'
  },
  wxLoginTitleText: {
    padding: 4,
    fontSize: 11,
    color: '#999',
    backgroundColor: '#fff'
  },
  wxLoginButtonWrap: {
    marginTop: 16,
    width: WIDTH - 20,
    height: 38,
    borderRadius: 5,
    borderWidth: .8,
    borderColor: '#4b6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wxLoginLogo: {
    width: 20,
    height: 20,
    marginRight: 14,
  }
})

export default LoginComponent