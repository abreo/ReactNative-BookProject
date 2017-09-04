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
        fontWeight: 'normal'
      }
    }
  }
)

export default BookrackStackNavigator