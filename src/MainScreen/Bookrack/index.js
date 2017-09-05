import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const BookrackStackNavigator = StackNavigator(
  {
    BookrackHomeStack: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: '书架'
      }
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        // 字体粗细
        fontWeight: 'normal',
        // 标题居中——安卓
        alignSelf: 'center'
      }
    }
  }
)

export default BookrackStackNavigator