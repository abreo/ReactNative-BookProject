import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

class HeaderRight extends PureComponent {
  handleNavigate = () => {
    const { navigate, goBack, target } = this.props
    switch (target.type) {
      case 'navigate':
        navigate(target.value)
        break
      case 'goBack':
        goBack()
        break
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.handleNavigate} activeOpacity={.5} style={{ marginRight: 10 }}>
        <Text>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )
  }
}


export default HeaderRight