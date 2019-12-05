import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

/**
 * custom imports
 */
import { styles } from './styles'
import Images from '../../Constants/images'
import strings from '../../Constants/Strings'
import LoginWithEmail from '../LoginScreen/LoginWithEmail'
import {Colors} from '../../Constants'

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

export default class OnboardingLogin extends PureComponent {

    state = {
        modalVisible: false
    }
    toggleModalVisibility = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.state.modalVisible &&
                    <LoginWithEmail
                        navProps={this.props.navigation}
                        toggleModalVisibility={() => this.toggleModalVisibility()}
                        modalVisible={this.state.modalVisible} />
                }
                <Image
                    style={styles.logoImageStyle}
                    source={Images.logoImage}
                    resizeMode='contain'
                />
                <Text style={styles.helloStrangerStyle}>{strings.helloStrangers}</Text>
                <Text style={styles.welcomeTextStyle}>{strings.welcomeTo}</Text>
                <Text style={styles.whereSharingTextStyle}>{strings.whereSharingExperiences}</Text>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.loginButtonStyle} >
                    <TouchableOpacity
                        onPress={this.toggleModalVisibility}
                        >
                        <Text style={styles.loginButtonTitleStyle}>Login using email</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                    <View style={styles.createAnAccountViewStyle}>
                        <Text style={styles.newToGroupSetGoStyle}>{strings.newToGroupSetGo}</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountName') }}>
                            <Text style={styles.createAccountTextStyle}>Create an account </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.youCanAlsoLoginWithStyle}>{strings.youCanAlsoLoginWith}</Text>
                    <View style={styles.socialLoginViewStyle}>
                        <TouchableOpacity>
                            <Image style={styles.googleButtonStyle} source={Images.facebookLogo} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.facebookButtonStyle} source={Images.googleLogo} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomViewStyle} >
                        <TouchableOpacity style={styles.skipLoginButtonStyle}>
                            <Text style={styles.skipLoginTextStyle} >{strings.skipLogin}</Text>
                        </TouchableOpacity>
                    </View>

            </View>
                )
            }
}