import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

/**
 * custom imports
 */
import strings from '../../Constants/Strings'
import styles from './styles'
import { vh, Colors, vw } from '../../Constants'
import { FlatList } from 'react-native-gesture-handler'
import Card from './Card'

export default class ExploreNoOfParticipants extends PureComponent {
    state = {
        showCard: false,
        itemTapped: {}
    }


    toggleModalVisibility(item){
        // this.setState({ showCard: !this.state.showCard })
        this.setState({itemTapped: item},()=>{this.setState({showCard: true})})
        
    }

    renderItems = (rowData) => {
        return (
            <TouchableOpacity onPress={() => this.toggleModalVisibility(rowData.item)} style={styles.cardStyle}>
                <Icon name='ios-checkmark-circle' size={vw(15)} style={styles.checkmarkStyle} color={rowData.item.verified ? Colors.checkmarkGreen : Colors.lightGray} />
                <Image
                    style={styles.userImageStyle}
                    source={rowData.item.userImage}
                />
                <Text style={styles.userNameStyle}>{rowData.item.userName}</Text>
                <Icon name="ios-chatbubbles" size={vw(20.7)} color={Colors.lightGray} />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card 
                showCard = {this.state.showCard}
                toggleModalVisibility = {()=>this.toggleModalVisibility()}
                itemTapped = {this.state.itemTapped}
                />
                <View style={styles.headerViewStyle}>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                        <Icon name="ios-arrow-round-back" size={vh(40)} color={Colors.white} style={styles.backButtonStyle} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitleStyle}>{strings.participantList}</Text>
                </View>
                <FlatList
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    data={participantsData}
                    keyExtractor={(item) => item.userId.toString()}
                    renderItem={this.renderItems}
                />
            </View>
        )
    }
}

const participantsData = [
    { userId: 1, userName: 'Scarlet Tindle', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 2, userName: 'Sonya Bevis-thomas', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 3, userName: 'Noah William', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 4, userName: 'James Alexander', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 5, userName: 'Matthew Alexander', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 6, userName: 'Carol Ramírez', verified: false, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 7, userName: 'Juih Guidelli', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 8, userName: 'Rachel Taylor', verified: false, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 9, userName: 'Matthew Alexander', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 10, userName: 'Carol Ramírez', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 11, userName: 'Juih Guidelli', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
    { userId: 12, userName: 'Rachel Taylor', verified: true, userImage: require('../../Assets/Images/userImage.jpg') },
]
