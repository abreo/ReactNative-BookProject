import { DrawerNavigator } from 'react-navigation'
import Dimensions from 'Dimensions'

import MainTabNavigator from './MainScreen'
import TwoTest from './TwoScreen'


const { width } = Dimensions.get('window')


const App = DrawerNavigator(
  {
    MainDrawer: {
      screen: MainTabNavigator
    },
    Tow: {
      screen: TwoTest
    }
  },
  {
    drawerWidth: 2 * width / 3
  }
)





export default App
