import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native'

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'home'
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>
                    12345
                </Text>
                <View style={{ width: 100 }}>
                    <Button title="drawer" onPress={() => navigate('DrawerOpen')} />
                </View>
            </View>
        )
    }
}

export default HomeScreen