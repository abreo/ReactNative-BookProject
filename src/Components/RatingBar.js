import React, { PureComponent } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import PropTypes from 'prop-types'

const stars = [
  require('./images/star_icons/star_0.png'),
  require('./images/star_icons/star_1.png'),
  require('./images/star_icons/star_2.png'),
  require('./images/star_icons/star_3.png'),
  require('./images/star_icons/star_4.png'),
  require('./images/star_icons/star_5.png'),
  require('./images/star_icons/star_6.png'),
  require('./images/star_icons/star_7.png'),
  require('./images/star_icons/star_8.png'),
  require('./images/star_icons/star_9.png'),
  require('./images/star_icons/star_10.png'),
]

class RatingBar extends PureComponent {
  static propTypes = {
    score: PropTypes.number
  }
  _renderStar() {
    const { score } = this.props
    const starList = [1, 2, 3, 4, 5]
    const starInt = Math.floor(score / 20)
    const starFloat = Number((score / 20).toFixed(1).split('.')[1])
    return starList.map((item) => {
      let n = 10
      if (item > starInt) {
        n = starInt + 1 === item ? starFloat : 0
      }
      return <Image source={stars[n]} style={styles.icon} key={item} />
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this._renderStar()}</Text>
        <Text style={styles.text}>{(this.props.score / 10).toFixed(1)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 50,
    height: 50
  },
  text: {
    marginLeft: 8
  }
})

export default RatingBar