import React, { PureComponent } from 'react'
import { Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { Colors, vw, VectorIcons} from '../../../Constants'
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
            <TouchableOpacity onPress={() => this.searchResultRowTapped(rowData.item)} style={styles.listRowStyle}>
                <Text style={styles.eventTextStyle}>{rowData.item.eventName}</Text>
                <Text style={styles.eventLocationTextStyle}>{rowData.item.distance}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.textinputViewStyle}>
                    <VectorIcons.Ionicons name="ios-search" size={vw(15)} color={Colors.gray} />
                    <TextInput
                        value={this.state.searchKeyword}
                        onChangeText={text => this.setState({ searchKeyword: text })}
                        placeholder='Search by event id, event name, hashtag'
                        style={styles.textinputStyle}
                    />
                </View>
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