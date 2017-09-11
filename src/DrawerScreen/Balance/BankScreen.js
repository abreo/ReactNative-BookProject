import React, { Component, PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')


// 此页待调整9.8


// 选项图标
const selectIcons = [
  require('../images/icons/not_selected.png'),
  require('../images/icons/selected.png')
]


class BankCard extends PureComponent {
  handlePress = () => {
    Alert.alert('hello')
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={.5} onPress={this.handlePress}>
        <View style={cardStyles.container}>
          <View style={cardStyles.bankWrap}>
            <Image style={cardStyles.bankIcon} source={this.props.icon} />
            <View>
              <Text style={cardStyles.bankName}>{this.props.label}</Text>
              <Text style={cardStyles.bankNum}>{this.props.num}</Text>
            </View>
          </View>
          {/* 选中状态 */}
          <Image source={selectIcons[0]} style={cardStyles.selectIcon} />
        </View>
      </TouchableOpacity>
    )
  }
}

const cardStyles = StyleSheet.create({
  container: {
    height: 60,
    borderTopWidth: .5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 10
  },
  bankWrap: {
    height: 66,
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
  selectIcon: {
    width: 16,
    height: 16,
  }
})

import gsBankIcon from '../images/gsbank.png'
import jsBankIcon from '../images/jsbank.png'
const mockData = [
  { id: 1, label: '中国工商银行', num: '621225*******1231234', icon: gsBankIcon },
  { id: 2, label: '中国建设银行', num: '545123*******1231233', icon: jsBankIcon },
  { id: 3, label: '中国工商银行', num: '632122*******3123334', icon: gsBankIcon }
]

class BankScreen extends Component {
  constructor() {
    super()
    this.state = {
      bankListData: mockData,
      selectedId: null,
    }
  }
  onBankSelect = (id) => {
    this.setState({
      selectedId: id
    })
  }
  renderBankCrad() {
    return this.state.bankListData.map((item, index) => {
      return <BankCard key={index} {...item} selectedId={this.state.selectedId} onBankSelect={this.onBankSelect} />
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bankList}>
          {/* 演示用 */}
          {this.renderBankCrad()}
        </View>
        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.buttonWrap}>
            <Image source={require('../images/icons/bank.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>添加银行卡</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankList: {
    width: WIDTH
  },
  buttonWrap: {
    width: WIDTH,
    height: 42,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  buttonText: {
    color: '#4b6'
  }
})

export default BankScreen