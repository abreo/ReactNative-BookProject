import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const ChatStackNavigator = StackNavigator(
  {
    ChatHomeStack: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: '沟通'
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

export default ChatStackNavigator