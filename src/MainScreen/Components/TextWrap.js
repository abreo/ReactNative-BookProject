import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

// img
const unfoldIcon = require('./images/unfold.png')


class TextWrap extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.object,
    content: PropTypes.string
  }
  constructor() {
    super()
    this.state = {
      LineNum: 3
    }
  }
  handleUnfold = () => {
    this.setState({
      LineNum: 100
    })
  }
  render() {
    const { title, content, user = false } = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.textColor]}>
          {title}
        </Text>

        <View style={styles.bodyWrap}>
          {
            user &&
            <View style={styles.user}>
              <Image source={user.avatar} style={styles.userAvatar} />
            </View>
          }

          <View style={styles.areaTextWrap}>
            {
              user &&
              <Text style={styles.userName}>{user.name}</Text>
            }
            <Text numberOfLines={this.state.LineNum} style={[styles.areaText, user && styles.userAreaText]}>
              {content}
            </Text>
          </View>
        </View>

        {this.state.LineNum === 3 && <View style={styles.footerWrap}>
          <TouchableOpacity onPress={this.handleUnfold} style={styles.footerButton} activeOpacity={.5}>
            <Text style={[styles.textColor]}>展开全文</Text>
            <Image style={styles.footerIcon} source={unfoldIcon} />
          </TouchableOpacity>
        </View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: '#999'
  },
  container: {
    borderBottomWidth: .5,
    borderBottomColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 10,
  },
  bodyWrap: {
    paddingTop: 6,
    // borderWidth: 1,
    flexDirection: 'row'
  },
  // areaTextWrap: {
  //   borderWidth: 1,
  //   width: 200,
  // },
  areaText: {
    //   // 设定屏幕-20
    //   width: WIDTH - 20,
    marginTop: 6,
    marginBottom: 6,
    lineHeight: 24,
    // fontSize: 16,
    color: '#333',
  },
  userAreaText: {
    // 虽然不知道为啥,但还是-80
    width: WIDTH - 80
  },
  footerWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  footerButton: {
    flexDirection: 'row'
  },
  footerIcon: {
    width: 20,
    height: 20
  },
  userAvatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25
  },
  userName: {
    fontSize: 16,
    color: '#999',
  },
})

export default TextWrap