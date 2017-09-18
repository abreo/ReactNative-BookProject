import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import { JReact } from '../Components'
import { BookItem } from '../Components/putbook'

// mock
const mockData = [
  {
    bookCover: require('../images/book_cover.jpeg'),
    status: {
      text: '审核通过',
      bgColor: 'rgba(0,255,88,.8)'
    },
    bookName: '从你的全世界路过',
    authorName: '(中) 张佳怡'
  },
  {
    bookCover: require('../images/book_cover.jpeg'),
    status: {
      text: '审核通过',
      bgColor: 'rgba(255,255,88,.8)'
    },
    bookName: '测试短',
    authorName: '(中) 徐小阿三'
  },
  {
    bookCover: require('../images/book_cover.jpeg'),
    status: {
      text: '审核通过',
      bgColor: 'rgba(0,88,88,.8)'
    },
    bookName: '单一过',
    authorName: '(中) 张佳'
  },
  // {
  //   bookCover: require('../images/book_cover.jpeg'),
  //   status: {
  //     text: '审核通过',
  //     bgColor: 'rgba(0,255,88,.8)'
  //   },
  //   bookName: '从你的阿斯顿打撒萨达阿斯顿',
  //   authorName: '(中) 阿斯顿怡'
  // }
]

class PutbookScreen extends Component {
  constructor() {
    super()
    this.state = {
      bookList: mockData
    }
  }
  renderAddBook = () => {
    return this.state.bookList.map((item, index) => (
      <BookItem key={index} {...item} {...this.props.navigation} />
    ))
  }
  render() {
    return (
      <ScrollView>
        <JReact.IntervalSpace text="添加传书" />
        <View style={styles.bookWrap}>
          {this.renderAddBook()}
          <BookItem isButton={true} {...this.props.navigation} />
        </View>
        <JReact.IntervalSpace text="我的传书" />
        <View style={styles.bookWrap}>
          {this.renderAddBook()}
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
  }
})


export default PutbookScreen