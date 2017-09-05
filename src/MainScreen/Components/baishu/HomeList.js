import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native'

// mock
const mockData = [
  {
    bookName: '来自未来的书',
    bookCover: require('../../images/book_cover.jpeg'),
    userName: '阿猛',
    userAvatar: require('../../images/avatar.jpg'),
    grade: 8.9,
    distance: 200
  }
]

class BaishuList extends Component {
  render() {
    return (
      <View >
        <FlatList
          data={mockData}
          renderItem={({ item }) => <Text>{item.bookName}</Text>}
        />
      </View>
    )
  }
}

export default BaishuList