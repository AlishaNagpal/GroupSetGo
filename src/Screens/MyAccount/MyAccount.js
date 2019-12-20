import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { vh, vw, VectorIcons, Colors, Strings, Images } from '../../Constants';
import styles from './styles';
import NewFlatlist from './Flatlist';

export default class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    myList = (myData) => {
        return (
            <FlatList
                data={myData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItems}
                scrollEnabled={false}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                bounces={false}
                showsVerticalScrollIndicator={false}
            />
        );

    }

    renderItems = (rawData) => {
        const { item, index } = rawData;
        return (
            <NewFlatlist
                item={item}
                index={index}
                navigation={this.props.navigation}
            />
        );
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={styles.separator}
            />
        );
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.pop()} >
                        <VectorIcons.MaterialCommunityIcons
                            name="keyboard-backspace"
                            size={vh(30)}
                            color={Colors.white}
                            style={styles.backButtonStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.reviewHeading}>{Strings.myAccount}</Text>
                </View>
                <View style={styles.accountHead}>
                    <Text style={styles.reviewHeadingAccount}>{Strings.account}</Text>
                </View>
                {this.myList(DATA)}
                <View style={styles.accountHead}>
                    <Text style={styles.reviewHeadingAccount}>{Strings.help}</Text>
                </View>
                {this.myList(DATA2)}
                <View style={styles.availableOuterView} />
                <TouchableOpacity style={styles.listView} onPress={() => this.props.navigation.navigate('InviteFrnd')}>
                    <Text style={styles.listText}>{Strings.inviteFrnd}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const DATA = [
    { title: 'my profile', route: 'MyProfile' },
    { title: 'change password', route: 'ChangePwd' },
    { title: 'payments', route: 'Payments' },
    { title: 'settings', route: 'Settings' },
]

const DATA2 = [
    { title: 'contact us', route: 'ContactUs' },
    { title: 'privacy policy', route: 'PrivacyPolicy' },
    { title: 'terms and conditions', route: 'TNC' },
]