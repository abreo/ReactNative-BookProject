import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import JReact from '../jreact-pull.js'
import BookItem from './Components/BookItem'

// img
const rightIcon = require('./images/right.png')
const bookCover = require('./images/dev/book_cover.jpeg')
// mock
const mockData = [
  {
    bookCover,
    status: {
      text: '审核通过',
      bgColor: 'rgba(0,255,88,.8)'
    },
    bookName: '从你的全世界路过',
    authorName: '(中) 张佳怡'
  },
  {
    bookCover,
    status: {
      text: '审核通过',
      bgColor: 'rgba(255,255,88,.8)'
    },
    bookName: '测试短',
    authorName: '(中) 徐小阿三'
  },
  {
    bookCover,
    status: {
      text: '审核通过',
      bgColor: 'rgba(0,88,88,.8)'
    },
    bookName: '单一过',
    authorName: '(中) 张佳'
  },
  {
    bookCover,
    status: {
      text: '审核通过',
      bgColor: 'rgba(0,255,88,.8)'
    },
    bookName: '从你的阿斯顿打撒萨达阿斯顿',
    authorName: '(中) 阿斯顿怡'
  }
]

class Bookrack extends Component {
  constructor() {
    super()
    this.state = {
      bookList: mockData
    }
  }
  renderAddBook = (type) => {
    return this.state.bookList.map((item, index) => (
      <BookItem key={index} type={type} {...item} {...this.props.navigation} />
    ))
  }
  render() {
    return (
      <ScrollView>
        <JReact.IntervalSpace text="锁定" />
        <View style={styles.bookWrap}>
          {this.renderAddBook(2)}
        </View>
        <JReact.IntervalSpace text="在读" />
        <View style={styles.bookWrap}>
          {this.renderAddBook(2)}
        </View>
        <View style={styles.readTitleWrap}>
          <View style={styles.readTitleLeft}>
            <Text style={{ color: '#333' }}>已读</Text>
            <Text style={styles.readTitleInfo}>(18本) 位列第6368</Text>
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.readTitleRight}>
              <Text style={{ color: '#999' }}>查看榜单</Text>
              <Image source={rightIcon} style={styles.readTitleIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.bookWrap, styles.bottomMargin]}>
          {this.renderAddBook(2)}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  bookWrap: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  readTitleWrap: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  readTitleIcon: {
    width: 16,
    height: 16
  },
  readTitleInfo: {
    paddingLeft: 10,
    fontSize: 12,
    color: '#999'
  },
  readTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  readTitleRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottomMargin: {
    marginBottom: 10
  }
})


export default Bookrack