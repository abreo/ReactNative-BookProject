import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginRight: 10
  }
})

const HeaderQR = ({ navigate }) => (
  <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
    <Image
      source={require('./images/icons/qr.png')}
      style={styles.icon}
    />
  </TouchableOpacity>
)

// class HeaderQR extends Component {
//   render() {
//     const { navigate } = this.props.navigation
//     console.log('触发render')
//     return (
//       <TouchableOpacity onPress={() => 1 + 2}>
//         <Image
//           source={require('../icon/qr.png')}
//           style={styles.icon}
//         />
//       </TouchableOpacity>
//     )
//   }
// }

// function wrapnavigate(navigate) {
//   console.log(112)
//   // navigate('DrawerOpen')
// }


export default HeaderQR