import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import JReact from '../jreact-pull'
import BookItem from './Components/BookItem'

// img
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
  }
]

class Putbook extends Component {
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
  _onRefresh = () => {
    console.log('refresh...')
  }
  render() {
    return (
      <ScrollView>
        <JReact.IntervalSpace text="添加传书" />
        <View style={styles.bookWrap}>
          {this.renderAddBook(1)}
          <BookItem type={0} {...this.props.navigation} />
        </View>
        <JReact.IntervalSpace text="我的传书" />
        <View style={[styles.bookWrap, styles.bottom]}>
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
  bottom: {
    marginBottom: 10
  }
})


export default Putbook