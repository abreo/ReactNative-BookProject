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
        fontWeight: 'normal'
      }
    }
  }
)

export default ChatStackNavigator