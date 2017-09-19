import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import PropTypes from 'prop-types'
import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

const addIcon = require('./images/addbook.jpg')

class BookItem extends PureComponent {
  static propTypes = {
    type: PropTypes.number,
    bookCover: PropTypes.node,
    status: PropTypes.object,
    bookName: PropTypes.string,
    authorName: PropTypes.string
  }
  handleBookNav = () => {
    const { navigate, type } = this.props
    switch (type) {
      case 1:
        navigate('PutbookBookStack')
        break
      case 2:
        navigate('PutbookAddbookStack')
        break
    }
  }
  render() {
    const {
      type = 0,
      bookCover,
      status = {},
      bookName,
      authorName
    } = this.props
    return (
      <View style={styles.itemWrap}>
        <TouchableOpacity activeOpacity={.5} onPress={this.handleBookNav}>
          <View style={styles.bookWrap}>
            <Image source={bookCover || addIcon} style={styles.bookImage} />
            <View style={[styles.bookStatus, { backgroundColor: status.bgColor }]}>
              <Text style={{ color: '#fff' }}>{status.text}</Text>
            </View>
          </View>
        </TouchableOpacity>
        {
          Boolean(type) || (
            <View style={styles.bookInfo}>
              <Text style={styles.bookName} numberOfLines={2}>{bookName}</Text>
              <Text style={styles.bookAuthor}>{authorName}</Text>
            </View>)
        }
      </View>
    )
  }
}


// 书本宽度计算
const bookNum = 3
const bookMargin = 10
const bookWidth = (WIDTH - bookMargin * bookNum * 2) / 3
const bookHeigth = 25 / 18 * bookWidth

const styles = StyleSheet.create({
  itemWrap: {
    width: bookWidth,
    margin: bookMargin,
    // borderWidth: 1
  },
  bookWrap: {
    // pass
  },
  bookImage: {
    height: bookHeigth,
    width: bookWidth,
  },
  bookStatus: {
    position: 'absolute',
    bottom: 0,
    width: bookWidth,
    backgroundColor: 'rgba(0,200,66,.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookInfo: {
    height: bookHeigth * 2 / 5,
    marginTop: 6,
    // flex: 1,
    justifyContent: 'space-between',
    // borderWidth: 1,
  },
  bookName: {
    color: '#333'
  },
  bookAuthor: {
    fontSize: 12,
    color: '#999'
  }
})

export default BookItem