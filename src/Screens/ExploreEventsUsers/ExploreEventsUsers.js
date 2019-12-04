import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

/**
 * custom imports
 */
import { vh, Colors } from '../../Constants'
import styles from './styles'
import TabNavigator from './TabNavigation/TabNavigator'
export default class ExploreEventsUsers extends PureComponent {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerView}>
                    <Icon onPress={() => console.warn("back button tapped")} name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.backButtonStyle} />
                    <View style = {styles.tabbarViewStyle}>
                    <TabNavigator />
                    </View>
                </View>
            </View>
        )
    }
}
