import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'

const PutbookStackNavigator = StackNavigator(
  {
    PutbookHomeStack: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: '传书'
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

export default PutbookStackNavigator