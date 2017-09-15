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

// 评分展示组件
import RatingBar from './RatingBar'
// 时间戳处理
import * as tools from '../utils/tools'


const zanIcons = [require('./images/icons/zan.png'), require('./images/icons/zan_selected.png')]

class CommentItem extends Component {
  constructor() {
    super()
    this.state = {
      zan: false
    }
  }
  handleZan = () => {
    this.setState({
      zan: !this.state.zan
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/user_avatar.jpg')} style={styles.avatar} />
        <View style={styles.infoWrap}>
          <View style={styles.infoTitle}>
            <Text>此道通常按</Text>
            <RatingBar score={68} />
          </View>
          <Text style={styles.infoDate}>
            {tools.processTimestamp(321231234323)}
          </Text>
          <Text numberOfLines={3} style={styles.infoContent}>
            文字内容文字内容文字,内容,文字内容文字,,内容文字内容文,字内容文字内容文字内容,文字内容文字内容文字内容文字内容文字内容文字内容,文字内容文字内容文字内容
            文字内容文字内容文字内容,文字内容文字内容文字内容文字内容文字内,容文字内容,文字内容文字内,容文字内容文字内容文字内容文字内容,文字内容文字内容文字内容
          </Text>
          <View style={styles.menuWrap}>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.menuButton}>
                <Image source={require('./images/icons/edit.png')} style={styles.icon} />
                <Text style={{ fontSize: 13 }}>编辑</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.menuButton}>
                <Image source={require('./images/icons/commont.png')} style={styles.icon} />
                <Text style={{ fontSize: 13 }}>评论</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={this.handleZan}>
              <View style={styles.menuButton}>
                <Image source={zanIcons[Number(this.state.zan)]} style={styles.icon} />
                <Text style={{ fontSize: 13 }}>点赞</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image source={require('./images/icons/trigon.png')} style={styles.trigon} />
          <View style={styles.subComment}>
            <Text style={styles.subCommentItem}>我是徐行啊: 我是评论一,我是评论一,我是评论一,我是评论一,我是评论一,我是评论一,我是评论一</Text>
            <Text style={styles.subCommentItem}>我是徐行啊: 我是评论一</Text>
            <Text style={styles.subCommentItem}>我是徐行啊: 我是评论一</Text>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  trigon: {
    width: 14,
    height: 14,
    // position: 'absolute',
    // top: -10
    marginLeft: 68,
    marginBottom: -6
  },
  icon: {
    width: 16,
    height: 16
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  infoWrap: {
    paddingLeft: 10,
    width: WIDTH - 70
  },
  infoTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoDate: {
    marginTop: 6,
    marginBottom: 2
  },
  infoContent: {
    color: '#333',
    lineHeight: 24
  },
  menuWrap: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  },
  menuButton: {
    width: 48,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subComment: {
    padding: 6,
    paddingTop: 0,
    // borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#f2f2f2'
  },
  subCommentItem: {
    lineHeight: 24
  }
})

export default CommentItem


