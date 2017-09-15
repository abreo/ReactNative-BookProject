import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

import { JReact } from '../Components'
import { TextWrap } from '../Components/baishu'


// 基本信息
const baseUser = {
  avatar: require('../images/avatar.jpg'),
  name: '刺刀通长安'
}
const baseContent = `一个巨大的互联网知识库，汇聚了上亿网民的智慧结晶，搜狗知识则搜索聚合了多家百科、问答类网站的优质数据。知识搜索正式版融入健康、游戏、旅游等垂直领域问答网站的优质数据，进一步突出“博采众家之长”的产品特色。搜狗知识搜索利用了搜索匹配技术，能够向用户提供更相关的搜索结果。`



// 背景模糊程度
const BLURNUM = 8


class BookScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={require('../images/book_cover.jpeg')} style={styles.headerBg} blurRadius={BLURNUM}>
            <View style={styles.headerImgWrap}>
              <Image source={require('../images/book_cover.jpeg')} style={styles.headerImg} />
            </View>
          </ImageBackground>
          <View style={styles.headerWrap}>
            <View>
              <Text style={styles.infoTitle}>从你的全世界路过</Text>
              <View style={styles.infoRating}>
                <JReact.RatingBar score={80} />
              </View>
              <Text style={styles.infoText}>(中) 徐禹澎</Text>
              <Text style={styles.infoText}>(美) 尼古拉奥弗洛斯基</Text>
              <View style={styles.infoPosition}>
                <Image source={require('../images/icons/position.png')} style={styles.infoPositionIcon} />
                <Text style={styles.infoText}>200米</Text>
              </View>
            </View>
            <View style={styles.infoPriceWrap}>
              <View style={styles.infoPrice}>
                <Text style={[styles.priceText, { color: '#fc0' }]}>
                  ￥ 1.00
              </Text>
                <Text style={[styles.priceText, { color: '#333' }]}>
                  元/15天
              </Text>
              </View>
            </View>
          </View>
          <JReact.IntervalSpace text="基本信息" />
          <View style={styles.baseWrap}>
            <TextWrap type={true} title="推荐语" user={baseUser} content={baseContent} />
            <TextWrap type={false} title="内容简介" content={baseContent} />
            <TextWrap type={true} title="作者简介" content={baseContent} />
            <View style={[styles.baseLine, styles.baseLineBottom]}>
              <Text style={styles.baseLineText}>出版社</Text>
              <Text style={styles.baseLineText}>湖南文艺出版社</Text>
            </View>
            <View style={styles.baseLine}>
              <Text style={styles.baseLineText}>出版时间</Text>
              <Text style={styles.baseLineText}>2013-11-01</Text>
            </View>
          </View>
          <JReact.IntervalSpace text="读过的人" />
          <JReact.CommentItem />
          <JReact.CommentItem />
        </ScrollView >
        <View style={styles.footerWrap}>
          <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
            <View >
              <Image source={require('../images/avatar.jpg')} style={styles.footerAvatar} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
            <View style={[styles.itemButton, styles.footerCenter]}>
              <Image source={require('../images/icons/message_bottom.png')} style={styles.footerIcon} />
              <Text>沟通</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} activeOpacity={.5}>
            <View style={styles.itemButton}>
              <Image source={require('../images/icons/lock.png')} style={styles.footerIcon} />
              <Text>锁定</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerBg: {
    width: WIDTH
  },
  headerImgWrap: {
    height: 300,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImg: {
    width: 186,
    height: 260
  },
  headerWrap: {
    padding: 10,
    backgroundColor: '#fff'
  },
  infoTitle: {
    fontSize: 20,
    color: '#333'
  },
  infoRating: {
    paddingTop: 8,
    paddingBottom: 8
  },
  infoText: {
    color: '#999',
    paddingTop: 2
  },
  infoPosition: {
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoPositionIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  infoPriceWrap: {
    height: 40,
    paddingTop: 10,
    borderTopWidth: .3,
    borderTopColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoPrice: {
    width: 120,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: 16
  },
  // 基本信息
  baseWrap: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 0
  },
  baseLine: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  baseLineText: {
    color: '#333'
  },
  baseLineBottom: {
    borderBottomWidth: .5,
    borderBottomColor: '#ccc'
  },
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


export default BookScreen