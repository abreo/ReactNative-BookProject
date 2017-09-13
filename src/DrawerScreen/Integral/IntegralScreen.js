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

// 余额列表
import DetailList from '../Components/DetailList'

class IntegralScreen extends Component {
  constructor() {
    super()
    this.state = {
      modal: false
    }
  }
  showModal = key => (e) => {
    e.preventDefault()
    this.setState({
      [key]: true
    })
  }
  onClose = key => () => {
    this.setState({
      [key]: false
    })
  }
  handleWithdrawNav = () => {
    this.props.navigation.navigate('IntegralWithdrawStack')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wraping, styles.topContainer]}>
          <Image source={require('../images/integral_icon.png')} style={styles.icon} />
          <Text style={{ fontSize: 11, color: '#999' }}>我的余额</Text>
          <View style={styles.info}>
            <Text style={{ fontSize: 12, color: '#999', paddingRight: 8, paddingTop: 6 }}>￥</Text>
            <Text style={{ fontSize: 22, color: '#333F' }}>561.15</Text>
          </View>
          {/* 提现按钮 */}
          <TouchableOpacity onPress={this.handleWithdrawNav} style={styles.withdrawButton} activeOpacity={.5}>
            <Text style={{ color: '#333', fontSize: 16 }}>变现</Text>
          </TouchableOpacity>
          <View style={styles.detailTitle}>
            <Text>余额明细</Text>
          </View>
        </View>

        {/* 余额明细列表 */}
        <DetailList />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  topContainer: {
    paddingTop: 20,
    alignItems: 'center'
  },
  icon: {
    width: 100,
    height: 100,
  },
  info: {
    marginRight: 8,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  withdrawButton: {
    width: WIDTH - 20,
    height: 38,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#999'

  },
  detailTitle: {
    width: WIDTH,
    height: 36,
    marginTop: 14,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#ddd'
  }
})



export default IntegralScreen