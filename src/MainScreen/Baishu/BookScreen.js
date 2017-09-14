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

console.log(TextWrap)


// 背景模糊程度
const BLURNUM = 8


class BookScreen extends Component {
  render() {
    return (
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
          <TextWrap type={true} />
          <TextWrap type={false} />
          <TextWrap type={true} />
        </View>

        <JReact.IntervalSpace text="读过的人" />
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
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
  }
})


export default BookScreen