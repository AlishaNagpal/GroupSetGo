import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

/**
 * custom imports
 */
import strings from '../../Constants/Strings'
import styles from './styles'
import { vh, Colors, vw, VectorIcons } from '../../Constants'
import { FlatList } from 'react-native-gesture-handler'

export default class ExploreNoOfParticipants extends PureComponent {
   
    renderItems = (rowData) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Card", { itemTapped: rowData, navigation: this.props.navigation.navigate })} style={styles.cardStyle}>
                <VectorIcons.Ionicons name='ios-checkmark-circle' size={vw(15)} style={styles.checkmarkStyle} color={rowData.item.verified ? Colors.checkmarkGreen : Colors.lightGray} />
                <Image
                    style={styles.userImageStyle}
                    source={rowData.item.userImage}
                />
                <Text style={styles.userNameStyle}>{rowData.item.userName}</Text>
                <VectorIcons.Ionicons name="ios-chatbubbles" size={vw(20.7)} color={Colors.lightGray} />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerViewStyle}>
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} style={styles.backButtonStyle}  >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
                        <Text style={styles.headerTitleStyle}>{strings.participantList}</Text>
                    </TouchableOpacity>
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
