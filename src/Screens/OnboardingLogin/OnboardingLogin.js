import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

/**
 * custom imports
 */
import { styles } from './styles'
import {Images, Colors, Strings} from '../../Constants'

const colors = [Colors.fadedRed,Colors.darkishPink]

export default class OnboardingLogin extends PureComponent {

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image
                    style={styles.logoImageStyle}
                    source={Images.logoImage}
                    resizeMode='contain' />
                <Text style={styles.helloStrangerStyle}>{Strings.helloStrangers}</Text>
                <Text style={styles.welcomeTextStyle}>{Strings.welcomeTo}</Text>
                <Text style={styles.whereSharingTextStyle}>{Strings.whereSharingExperiences}</Text>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
                    <TouchableOpacity style = {styles.loginButtonStyle}
                        onPress={() => this.props.navigation.navigate("LoginWithEmail")}>
                        <Text style={styles.loginButtonTitleStyle}>Login using email</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.createAnAccountViewStyle}>
                    <Text style={styles.newToGroupSetGoStyle}>{Strings.newToGroupSetGo}</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountName') }}>
                        <Text style={styles.createAccountTextStyle}>Create an account </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.youCanAlsoLoginWithStyle}>{Strings.youCanAlsoLoginWith}</Text>
                <View style={styles.socialLoginViewStyle}>
                    <TouchableOpacity>
                        <Image style={styles.googleButtonStyle} source={Images.facebookLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.facebookButtonStyle} source={Images.googleLogo} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomViewStyle} >
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate("SkipLoginDialog")} style={styles.skipLoginButtonStyle}>
                        <Text style={styles.skipLoginTextStyle} >{Strings.skipLogin}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}