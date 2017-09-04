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
        fontWeight: 'normal'
      }
    }
  }
)

export default PutbookStackNavigator