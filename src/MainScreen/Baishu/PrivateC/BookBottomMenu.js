import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

// img
const avatar = require('../images/dev/avatar.jpg')
const lockIcon = require('../images/lock.png')
const lockedIcon = require('../images/lock_selected.png')
const messageIcon = require('../images/message_bottom.png')

const lockIcons = [lockIcon, lockedIcon]

class BookBottomMenu extends Component {
  constructor() {
    super()
    this.state = {
      locked: false
    }
  }
  handleLock = () => {
    this.setState({
      locked: !this.state.locked
    })
  }
  render() {
    return (
      <View style={styles.footerWrap}>
        <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
          <View >
            <Image source={avatar} style={styles.footerAvatar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
          <View style={[styles.itemButton, styles.footerCenter]}>
            <Image source={messageIcon} style={styles.footerIcon} />
            <Text>沟通</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleLock} style={styles.footerItem} activeOpacity={.5}>
          <View style={styles.itemButton}>
            <Image source={lockIcons[Number(this.state.locked)]} style={styles.footerIcon} />
            <Text>锁定</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // bottom
  footerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  footerIcon: {
    width: 30,
    height: 30
  },
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
  footerCenter: {
    flex: 1,
    borderLeftWidth: .5,
    borderRightWidth: .5,
    borderColor: '#ccc'
  },
  itemButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default BookBottomMenu