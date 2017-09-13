import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native'

import Dimensions from 'Dimensions'
const { width: WIDTH } = Dimensions.get('window')

class JModal extends PureComponent {
  render() {
    const {
      // 标题
      title = '默认标题',
      // 显示
      modalVisible,
      // 确认事件(对象形式，label，value)
      onConfirmEvent,
      // 取消事件
      onCancelEvent,
      // 确认按钮配置
      confirmButton = {},
      // 取消按钮配置
      cancelButton = {},
    } = this.props
    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible.value}
        onRequestClose={() => { alert('请关闭弹窗后返回！') }}
      >
        <View style={modalStyles.modalWrap}>
          <View style={modalStyles.modalBox}>
            <View style={modalStyles.modalHeader}>
              <Text style={modalStyles.modalTitle}>{title}</Text>
            </View>

            <View style={modalStyles.modalContent}>
              {this.props.children}
            </View>

            <View style={modalStyles.modalFooter}>

              <TouchableOpacity onPress={onCancelEvent(modalVisible.label)} activeOpacity={.5} style={[modalStyles.modalButton, modalStyles.modalButtonLeft]}>
                <Text style={{ color: cancelButton.color || '#333' }}>{cancelButton.text || '取消'}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onConfirmEvent(modalVisible.label)} activeOpacity={.5} style={modalStyles.modalButton}>
                <Text style={{ color: confirmButton.color || '#4b6' }}>{confirmButton.text || '确定'}</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const modalStyles = StyleSheet.create({
  modalWrap: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.2)'
  },
  modalBox: {
    width: 260,
    height: 180,
    paddingTop: 12,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  modalHeader: {
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 14,
    color: '#333'
  },
  modalContent: {
    alignItems: 'center',
    marginTop: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFooter: {
    borderTopWidth: .3,
    borderTopColor: '#ccc',
    height: 44,
    flexDirection: 'row',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalButtonLeft: {
    borderRightWidth: .3,
    borderRightColor: '#ccc'
  }
})


export default JModal