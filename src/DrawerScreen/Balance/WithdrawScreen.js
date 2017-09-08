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


class WithdrawScreen extends Component {
  handleBankSelect = () => {
    this.props.navigation.navigate('BalanceBankStack')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>提现金额</Text>
        </View>
        <View style={styles.inputWrap}>
          <View style={styles.inputWrapBox}>
            <Text style={styles.inputIcon}>￥</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent" />
          </View>
          <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 4 }}>可用余额: 121.00元</Text>
        </View>
        <View style={styles.title}>
          <Text>提现银行卡</Text>
        </View>
        <TouchableOpacity activeOpacity={.5} onPress={this.handleBankSelect}>
          <View style={styles.bankWrap}>
            <Image source={require('../images/gsbank.png')} style={styles.bankIcon} />
            <View>
              <Text style={styles.bankName}>中国工商银行</Text>
              <Text style={styles.bankNum}>621226********1231</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrap} activeOpacity={.5}>
          <View style={styles.button}>
            <Text style={{ color: '#fff' }}>申请提现</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    height: 36,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  inputWrap: {
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#fff'
  },
  inputWrapBox: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputIcon: {
    marginRight: -14
  },
  input: {
    width: WIDTH - 18,
    padding: 0,
    paddingLeft: 18,
    fontSize: 28,
    borderBottomWidth: .5,
    borderBottomColor: '#4b6'
  },
  bankWrap: {
    height: 66,
    paddingLeft: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankIcon: {
    width: 40,
    height: 40
  },
  bankName: {
    color: '#555'
  },
  bankNum: {
    fontSize: 10,
    color: '#999'
  },
  buttonWrap: {
    marginTop: 26,
    padding: 10
  },
  button: {
    height: 36,
    backgroundColor: '#4b6',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WithdrawScreen