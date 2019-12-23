import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { vh, VectorIcons, Colors, Strings } from '../../Constants';
import styles from './styles';
import NewFlatlist from './Flatlist';

export default class MyAccount extends Component {
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
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.pop()} style={styles.headerView} >
                    <VectorIcons.Ionicons
                        name="ios-arrow-back"
                        size={vh(30)}
                        color={Colors.white}
                        style={styles.backButtonStyle}
                    />
                    <Text style={styles.reviewHeading}>{Strings.myAccount}</Text>
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.accountHead}>
                        <Text style={styles.reviewHeadingAccount}>{Strings.account}</Text>
                    </View>
                    {this.myList(DATA)}
                    <View style={styles.accountHead}>
                        <Text style={styles.reviewHeadingAccount}>{Strings.help}</Text>
                    </View>
                    {this.myList(DATA2)}
                    <View style={styles.availableOuterView} />
                    <TouchableOpacity style={[styles.listView, styles.bottomStyle]} onPress={() => this.props.navigation.navigate('InviteFrnd')}>
                        <Text style={styles.listText}>{Strings.inviteFrnd}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.listView, { marginBottom: vh(30) }]} onPress={() => this.props.navigation.navigate('Logout')}>
                        <Text style={styles.listText}>{Strings.logout}</Text>
                        <VectorIcons.MaterialCommunityIcons name='logout' size={vh(20)} color={Colors.fadedGray} />
                    </TouchableOpacity>
                </ScrollView>
            </View>

        );
    }
}

const DATA = [
    { title: 'my profile', route: 'MyProfile' },
    { title: 'change password', route: 'ResetPassword' },
    { title: 'payments', route: 'Payments' },
    { title: 'settings', route: 'Settings' },
]

const DATA2 = [
    { title: 'contact us', route: 'ContactUs' },
    { title: 'privacy policy', route: 'PrivacyPolicy' },
    { title: 'terms and conditions', route: 'TNC' },
]