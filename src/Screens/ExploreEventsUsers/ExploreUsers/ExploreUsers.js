import React, { PureComponent } from 'react'
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

/**
 * custom imports
 */
import { Colors, vw} from '../../../Constants'
import styles from './styles'
import strings from '../../../Constants/Strings'

export default class ExploreEvents extends PureComponent {
    state = {
        searchKeyword: ''
    }

    searchResultRowTapped(tappedResult) {
        console.warn(tappedResult)
    }

    renderResultsList = (rowData) => {
        return (
            <TouchableOpacity onPress={() => this.searchResultRowTapped(rowData.item)} style={styles.rowStyle}>
                <View style = {styles.listRowStyle}>
                    <Icon name="ios-pin" size={vw(20)} color={Colors.black} style = {styles.listPinStyle} />
                    <Text style={styles.listEventTextStyle}>{rowData.item.eventName}</Text>
                </View>
                <Text style={styles.listLocationTextStyle}>{rowData.item.distance}</Text>
            </TouchableOpacity>
        );
    }
    locationPinTapped = () => {
        console.warn("location btn tapped")
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.textinputViewStyle}>
                    <Icon name="ios-search" size={vw(15)} color={Colors.gray} />
                    <TextInput
                        value={this.state.searchKeyword}
                        onChangeText={text => this.setState({ searchKeyword: text })}
                        placeholder='Search by name or email id'
                        style={styles.textinputStyle}
                    />
                </View>
                <TouchableOpacity onPress={this.locationPinTapped} style={styles.searchLocationViewStyle}>
                    <Icon name="ios-pin" size={17} color={Colors.black} />
                    <Text style={styles.locationTextStyle}>Anywhere</Text>
                </TouchableOpacity>
                <Text style={styles.recentHeadingStyle}>{strings.recentSearches}</Text>
                <FlatList
                    bounces={false}
                    data={searchResultData}
                    style={styles.searchResultsListStyle}
                    renderItem={this.renderResultsList}
                    keyExtractor={item => item.searchId.toString()}
                />
            </View>
        )
    }
}

const searchResultData = [
    { searchId: 1, eventName: 'Indoor Play at Ball Factory, Chicago', distance: '7.5miles, away' },
    { searchId: 2, eventName: 'Emporium Arcade Bar, Milwaukee Ave, Chicago', distance: '9 miles, away' },
    { searchId: 3, eventName: 'The Original Paint Nite, Chicago', distance: '10.2 miles, away' },
    { searchId: 4, eventName: 'Laser Tag Sessions, Milwaukee Ave, Chicago', distance: '11.5 miles, away' },
]