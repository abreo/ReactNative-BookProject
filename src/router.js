import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import MainTabScreen from './tab'
import TestPage from './pages/page1'

const AppRouter = StackNavigator(
    {
        Main: {
            screen: MainTabScreen
        },
        Test: {
            screen: TestPage
        }
    }
)

export default AppRouter