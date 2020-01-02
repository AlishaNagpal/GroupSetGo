import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { vh, VectorIcons, Colors, Strings, Images } from '../../Constants';
import styles from './styles';
import NewFlatlist from './Flatlist';
import Header from './Header';

export default class MyAccount extends Component {

    myList = (myData) => {
        return (
            myData.map((item, i) => {
                return (
                    NewFlatlist(item, i, this.props.navigation)
                )
            })
        )
    }

    myHeader = (myText) => {
        return (
            Header(myText)
        )
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.pop()} style={styles.headerView} >
                    {Header(Strings.myAccount)}
                </TouchableOpacity>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                    <TouchableOpacity style={styles.listView} onPress={() => this.props.navigation.navigate('LogoutDialog')}>
                        <Text style={styles.listText}>{Strings.logout}</Text>
                        <Image source={Images.accountExit} />
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerTxt}>v 1.1</Text>
                    </View>
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
    { title: 'my incidents', route: 'Incidents' },
    { title: 'privacy policy', route: 'PrivacyPolicy' },
]