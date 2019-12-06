import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

/**
 * custom imports
 */
import { styles } from './styles'
import Images from '../../Constants/images'
import strings from '../../Constants/Strings'
import { Colors } from '../../Constants'

const colors = [Colors.fadedRed,Colors.darkishPink]

export default class OnboardingLogin extends PureComponent {

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image
                    style={styles.logoImageStyle}
                    source={Images.logoImage}
                    resizeMode='contain' />
                <Text style={styles.helloStrangerStyle}>{strings.helloStrangers}</Text>
                <Text style={styles.welcomeTextStyle}>{strings.welcomeTo}</Text>
                <Text style={styles.whereSharingTextStyle}>{strings.whereSharingExperiences}</Text>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
                    <TouchableOpacity style = {styles.loginButtonStyle}
                        onPress={() => this.props.navigation.navigate("LoginWithEmail")}>
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
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate("SkipLoginDialog")} style={styles.skipLoginButtonStyle}>
                        <Text style={styles.skipLoginTextStyle} >{strings.skipLogin}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}