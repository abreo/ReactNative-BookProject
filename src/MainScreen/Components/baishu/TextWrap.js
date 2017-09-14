import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'



class TextWrap extends Component {
  constructor() {
    super()
    this.state = {
      LineNum: 3
    }
  }
  handleUnfold = () => {
    this.setState({
      LineNum: 10
    })
  }
  render() {
    const { type } = this.props
    const title = '推进语'
    const user = {
      name: '此道通长安',
      avatar: require('../../images/avatar.jpg')
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.textColor]}>
          {title}
        </Text>

        <View style={styles.bodyWrap}>
          {
            type &&
            <View style={styles.user}>
              <Image source={user.avatar} style={styles.userAvatar} />
            </View>
          }

          <View>
            {
              type &&
              <Text style={styles.userName}>{user.name}</Text>
            }
            <Text numberOfLines={this.state.LineNum} style={styles.areaText}>
              内容这是内搜索， 内容这是内搜索， 内容这是内搜索， 内容这是内搜索,
              内容这是内搜索， 内容这是内搜索， 内容这是内搜索， 内容这是内搜索,
              内容这是内搜索， 内容这是内搜索， 内容这是内搜索， 内容这是内搜索,
              内容这是内搜索， 内容这是内搜索， 内容这是内搜索， 内容这是内搜索
            </Text>
          </View>


        </View>

        {this.state.LineNum === 3 && <View style={styles.footerWrap}>
          <TouchableOpacity onPress={this.handleUnfold} style={styles.footerButton} activeOpacity={.5}>
            <Text style={[styles.textColor]}>展开全文</Text>
            <Image style={styles.footerIcon} source={require('./images/icons/unfold.png')} />
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
    borderBottomWidth: .3,
    borderBottomColor: '#ccc'
  },
  bodyWrap: {
    paddingTop: 10,
    // borderWidth: 1,
    flexDirection: 'row'
  },
  areaText: {
    marginTop: 6,
    marginBottom: 6,
    lineHeight: 24,
    fontSize: 16,
    color: '#333'
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
  },
  userName: {
    fontSize: 16,
    color: '#999',
  },
})

export default TextWrap