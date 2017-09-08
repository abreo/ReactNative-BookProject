import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

import { tools } from '../../utils_pull'

console.log(tools)

// 初始渲染条数
const ITEM_NUM = 8

// mock
const mockData = [
  {
    id: 0,
    text: '写书评摆渡人',
    status: 1,
    value: 500,
    timeStamp: Date.now()
  },
  {
    id: 1,
    text: '押金',
    status: 0,
    value: 5000,
    timeStamp: Date.now()
  },
  {
    id: 2,
    text: '续借《海底两万里》',
    status: 0,
    value: 500,
    timeStamp: Date.now()
  },
  {
    id: 3,
    text: '《从你的全世界路过》收入',
    status: 1,
    value: 500,
    timeStamp: Date.now()
  },
  {
    id: 4,
    text: '《大海啊大海》',
    status: 1,
    value: 123,
    timeStamp: Date.now()
  }
]


class DetailListItem extends PureComponent {
  handlePress = key => (e) => {
    console.log(key)
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.info}>
          <Text>
            {this.props.text}
          </Text>
          <Text style={{ fontSize: 12, color: '#999' }}>
            {tools.processTimestamp(this.props.timeStamp)}
          </Text>
        </View>
        <View style={styles.balance}>
          <Text style={{ paddingRight: 4, fontSize: 16, color: this.props.status ? '#f00' : '#4b6' }}>
            {this.props.status ? '+' : '-'}
          </Text>
          <Text>{this.props.value}</Text>
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    width: WIDTH - 20,
    height: 50,
    paddingTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // borderColor: '#f00',
  },
  info: {
    justifyContent: 'space-between'
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})



class DetailList extends PureComponent {
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
    <DetailListItem
      id={item.id}
      onPressItem={this._onPressItem}
      {...item}
    />
  )
  render() {
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
        // getItemLayout={(data, index) => ({ length: 140, offset: 140.5 * index, index })} 

        refreshing={true}
      />
    )
  }
}



export default DetailList