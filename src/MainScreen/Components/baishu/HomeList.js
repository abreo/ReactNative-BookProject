import React, { Component, PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  Alert
} from 'react-native'

import { Modal } from 'antd-mobile'

import Dimensions from 'Dimensions'

const { width: WIDTH } = Dimensions.get('window')
// 初始渲染条数
const ITEM_NUM = 4

// mock
const mockData = [
  {
    id: 1,
    bookName: '来自未来的',
    bookAuthor: '作者',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '阿猛',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 8.9,
    position: 200
  },
  {
    id: 2,
    bookName: '海底两万里',
    bookAuthor: '作者',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '列夫托尔斯泰',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 6.5,
    position: 213
  },
  {
    id: 3,
    bookName: '第三本书',
    bookAuthor: '作者',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '小时',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 6.5,
    position: 321
  },
  {
    id: 4,
    bookName: '计算机与科学',
    bookAuthor: '作者',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '小时',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 6.5,
    position: 333
  },
  {
    id: 5,
    bookName: '算法与结构',
    bookAuthor: '作者',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '小时',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 6.5,
    position: 400
  },
  {
    id: 6,
    bookName: '无尽指数',
    bookAuthor: '作者',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '小时',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 6.5,
    position: 555
  }
]


class BaishuListItem extends PureComponent {
  handlePress = key => (e) => {
    console.log(key)
  }
  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity onPress={this.handlePress('bookcover')} activeOpacity={0.8}>
          <View style={styles.itemWrap}>
            <Image source={require('../../images/book_cover.jpeg')} style={styles.bookCover} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePress('bookinfo')} activeOpacity={0.8}>
          <View style={styles.itemWrap}>
            <View style={styles.bookInfoWrap}>
              <View>
                <Text style={styles.bookTitle}>{this.props.bookName}</Text>
                <Text style={styles.bookAuthor}>(中) {this.props.bookAuthor}</Text>
                <View style={styles.bookGrade}>
                  <View style={styles.bookGradeStar}>
                    <Image source={require('../../images/icons/start.png')} style={{ width: 20, height: 20 }} />
                    <Image source={require('../../images/icons/start.png')} style={{ width: 20, height: 20 }} />
                    <Image source={require('../../images/icons/start.png')} style={{ width: 20, height: 20 }} />
                    <Image source={require('../../images/icons/start.png')} style={{ width: 20, height: 20 }} />
                    <Image source={require('../../images/icons/start.png')} style={{ width: 20, height: 20 }} />
                  </View>
                  <Text style={styles.bookGradeNum}>{this.props.grade}</Text>
                </View>
              </View>
              <View style={styles.bookPosition}>
                <Image source={require('../../images/icons/position.png')} style={{ width: 16, height: 16 }} />
                <Text>{this.props.position}米</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePress('user')} activeOpacity={0.8}>
          <View style={styles.itemWrap}>
            <View style={styles.userInfoWrap}>
              <Image source={require('../../images/avatar.jpg')} style={styles.userAvatar} />
              <Text>{this.props.userName}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: 140,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemWrap: {
    // borderWidth: 1,
    // borderColor: '#f00'
  },
  bookCover: {
    width: 80,
    height: 112
  },
  bookInfoWrap: {
    width: 160,
    height: 112,
    paddingLeft: 16,
    justifyContent: 'space-between'
  },
  bookTitle: {
    fontSize: 18,
    color: '#444'
  },
  bookAuthor: {
    marginTop: 4,
    color: '#aaa'
  },
  bookGrade: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bookGradeStar: {
    flexDirection: 'row',
  },
  bookGradeNum: {
    marginLeft: 6,
    fontSize: 13,

  },
  bookPosition: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userInfoWrap: {
    height: 112,
    width: 90,
    paddingTop: 8,
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 6
  }
})



class BaishuList extends PureComponent {
  constructor() {
    super()
    this.state = {
      listData: mockData
    }
  }
  // 确认唯一id
  _keyExtractor = (item) => item.id
  _onPressItem(id) { Alert.alert(id) }
  _renderItem = ({ item }) => (
    <BaishuListItem
      id={item.id}
      onPressItem={this._onPressItem}
      {...item}
    />
  )
  render() {
    console.log('is render list')
    return (
      <FlatList
        //数据源
        data={this.state.listData}
        //校对数据改变
        extraData={this.state}
        //设置每项标识
        keyExtractor={this._keyExtractor}
        //渲染每项
        renderItem={this._renderItem}
        //初始渲染数目
        initialNumToRender={ITEM_NUM}
        //分割线
        ItemSeparatorComponent={() => <View style={{ width: WIDTH, height: 0.5, backgroundColor: '#ccc' }}></View>}
        //优化阻止动态测绘
        getItemLayout={(data, index) => ({ length: 140, offset: 140.5 * index, index })}

        refreshing={true}
      />
    )
  }
}



export default BaishuList