import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

class BookBottomMenu extends Component {
  render() {
    return (
      <View style={styles.footerWrap}>
        <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
          <Text style={{ color: '#4b6' }}>图书足迹</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
          <View style={styles.footerButton}>
            <Text style={{color:'#333'}}>收益: </Text>
            <Text style={{color: '#fc0'}}>￥12.35</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  footerWrap: {
    height: 58,
    borderTopWidth: .5,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  footerItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerButton: {
    borderLeftWidth: .3,
    borderColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default BookBottomMenu