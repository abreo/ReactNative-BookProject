import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import { JReact } from '../Components'

const baseInfoLabels = [
  { label: '书名' },
  { label: '作者' },
  { label: '出版方' },
  { label: '出版时间', isSelect: true },
  { label: '书籍原价' }
]

const updateInfoLabels = [
  { label: '新旧程度', isSelect: true },
  { label: '传书价', isSelect: true }
]

class AddbookScreen extends Component {
  renderInput = (labelData) => () => {
    return labelData.map((item, index) => {
      return (
        <View key={index} style={[styles.inputWrap, item.label === '书籍原价' && { borderBottomWidth: 0 }]}>
          <Text style={styles.inputLabel}>{item.label}</Text>
          {
            !item.isSelect ?
              <TextInput placeholder="在此输入" style={styles.textInput} underlineColorAndroid="transparent" />
              : <TouchableOpacity style={{ flex: 1 }}>
                <View style={styles.textInput}>
                  <Text>点击</Text>
                  <Image source={require('../images/icons/right.png')} style={{ width: 20, height: 20 }} />
                </View>
              </TouchableOpacity>
          }
        </View>
      )
    })
  }
  render() {
    return (
      <ScrollView>
        <JReact.IntervalSpace text="基本信息" />
        <View style={styles.container}>
          {this.renderInput(baseInfoLabels)()}
        </View>
        <JReact.IntervalSpace text="补充信息" />
        <View style={styles.container}>
          {this.renderInput(updateInfoLabels)()}
          <View style={styles.recommendLabel}>
            <Text>推荐语</Text>
          </View>
          <TextInput style={styles.recommendInput} underlineColorAndroid="transparent"  multiline={true} numberOfLines={5/* 安卓特性 */} placeholder="编写推荐语"/>
        </View>
        <JReact.IntervalSpace text="照片" />
        <View style={styles.container}>
          <Text>照片</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  inputWrap: {
    height: 50,
    paddingRight: 10,
    borderBottomWidth: .5,
    borderColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    width: 70
  },
  textInput: {
    flex: 1,
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  // 推荐
  recommendLabel: {
    height: 50,
    justifyContent: 'center'
  },
  recommendInput: {
    marginBottom: 8,
    marginTop: -10,
    padding: 0,
  }
})

export default AddbookScreen