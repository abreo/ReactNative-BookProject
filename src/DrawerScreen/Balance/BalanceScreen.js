import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import Dimensions from 'Dimensions'

const { width: WIDTH } = Dimensions.get('window')

import DetailList from '../Components/Balance/DetailList'


class BalanceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.wraping, styles.topContainer]}>
          <Image source={require('../images/rmb.png')} style={styles.rmbIcon} />
          <Text style={{ fontSize: 11, color: '#999' }}>我的余额</Text>
          <View style={styles.balanceInfo}>
            <Text style={{ fontSize: 12, color: '#999', paddingRight: 8, paddingTop: 6 }}>￥</Text>
            <Text style={{ fontSize: 22, color: '#333F' }}>561.15</Text>
          </View>
          <TouchableOpacity style={styles.payButton} activeOpacity={.5}>
            <Text style={{ color: '#fff', fontSize: 16 }}>充值</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.withdrawButton} activeOpacity={.5}>
            <Text style={{ color: '#333', fontSize: 16 }}>提现</Text>
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
  // wraping: {
  //   flex: 1,
  //   borderWidth: 1,
  //  borderColor: '#f00',
  // },
  topContainer: {
paddingTop: 20,
  alignItems: 'center'
  },
    rmbIcon: {
  width: 100,
    height: 100,
},
balanceInfo: {
  marginRight: 8,
    marginTop: 10,
      flexDirection: 'row',
        alignItems: 'center'

},
payButton: {
  width: WIDTH - 20,
    height: 38,
      marginTop: 20,
        justifyContent: 'center',
          alignItems: 'center',
            borderRadius: 5,
              backgroundColor: '#4b6'
},
withdrawButton: {
  width: WIDTH - 20,
    height: 38,
      marginTop: 10,
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


  
export default BalanceScreen