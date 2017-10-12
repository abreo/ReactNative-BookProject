import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  ListView
} from 'react-native'

import Swipeout from 'react-native-swipeout'
import { SwipeListView } from 'react-native-swipe-list-view';

import JReact from '../jreact-pull'
import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

const userAvatar = require('./images/dev/user.jpg')
const robotAvatar = require('./images/dev/robot.jpg')
const rightIcon = require('./images/right.png')

var swipeoutBtns = [
  {
    text: '拉黑',
    backgroundColor: '#333'
  },
  {
    text: '清除记录'
  },
  {
    text: '删除',
    type: 'delete'
  }
]


messageList = [
  {
    name: '许许',
    avatar: userAvatar,
    msg: '这里是一个聊天第一项',
    time: '12:45'
  },
  {
    name: '徐宇鹏',
    avatar: userAvatar,
    msg: '我竟然也是这个头像',
    time: '11:11'
  }
]

class Chat extends Component {
  // renderMessage() {
  //   const charItem = []
  //   messageList.forEach((item, index) => {
  //     charItem.push(
  //       <Swipeout right={swipeoutBtns} key={`1-${index}`}>
  //         <ChatItem {...item}>
  //           <Text style={styles.time}>{item.time}</Text>
  //         </ChatItem>
  //       </Swipeout>
  //     )
  //     charItem.push(<Separator key={`2-${index}`} />)
  //   })
  //   charItem.pop()
  //   return charItem
  // }
  renderMessage() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <SwipeListView
        disableRightSwipe={true}
        dataSource={ds.cloneWithRows(messageList)}
        renderRow={item => (
          <ChatItem {...item}>
            <Text style={styles.time}>{item.time}</Text>
          </ChatItem>
        )}
        renderHiddenRow={data => (
          <View style={styles.menuWrap}>
            <View style={[styles.menuItem, styles.block]}>
              <Text style={{ color: '#fff' }}>拉黑</Text>
            </View>
            <View style={[styles.menuItem, styles.clear]}>
              <Text style={{ color: '#fff' }}>清楚记录</Text>
            </View>
            <View style={[styles.menuItem, styles.delete]}>
              <Text style={{ color: '#fff' }}>删除</Text>
            </View>
          </View>
        )}
        /* leftOpenValue={75} */
        rightOpenValue={-210}
      />
    )
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>

        <View style={styles.robotWrap}>
          <View style={styles.robot}>
            <ChatItem />
            <Image style={styles.robotIcon} source={rightIcon} />
          </View>
        </View>
        {
          this.renderMessage()
        }

      </View>
    )
  }
}

const ChatItem = (props) => {
  return (
    <View style={styles.itemWrap}>
      <View style={styles.infoWrap}>
        <Image source={props.avatar || robotAvatar} style={styles.avatar} />
        <View style={styles.itemText}>
          <Text numberOfLines={1} style={styles.title}>{props.name || '我是小助手'}</Text>
          <Text numberOfLines={1} style={styles.message}>{props.msg || '感谢使用掰书，分享存书，共享书香中国。'}</Text>
        </View>
      </View>
      {
        props.children
      }
    </View>
  )
}

const Separator = () => (
  <View style={{ alignItems: 'center' }}>
    <View style={{ borderTopWidth: .5, borderColor: '#999' }}></View>
  </View >
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  robotWrap: {
    marginTop: 10,
    marginBottom: 10,
    height: 90,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  robot: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  robotIcon: {
    width: 20,
    height: 20
  },
  itemWrap: {
    height: 70,
    backgroundColor: '#fff',
    padding: 10
  },
  infoWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 24
  },
  title: {
    fontSize: 16,
    color: '#333',
    paddingBottom: 4
  },
  message: {
    fontSize: 13,
    color: '#999'
  },
  time: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 12,
    color: '#999'
  },
  menuWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  menuItem: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  block: {
    backgroundColor: '#333'
  },
  clear: {
    backgroundColor: '#ccc'
  },
  delete: {
    backgroundColor: '#f44'
  }
})


export default Chat