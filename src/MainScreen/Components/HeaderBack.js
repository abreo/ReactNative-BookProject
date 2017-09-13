import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

const HeaderBack = ({ navigate, goBack, target }) => {
  const handlePress = () => {
    switch (target.type) {
      case 'navigate':
        navigate(target.value)
        break
      case 'goBack':
        goBack()
        break
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <Image source={require('../images/icons/back.png')} style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10
  }
})

export default HeaderBack