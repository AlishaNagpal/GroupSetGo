import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Ionicons'
Icon.loadFont()
Icon1.loadFont()


/**
 * custom imports
 */
import { styles } from './styles'
import Images from '../../Constants/images'
import strings from '../../Constants/Strings'
import { vw, vh, DesignWidth } from '../../Constants/Dimension'
import Colors from '../../Constants/Colors'

const colors = [Colors.fadedRed,Colors.darkishPink]

export default class ForgotPassword extends PureComponent {
    state = {
        email: ''
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ width: vw(DesignWidth) }}>
                    <Icon1 onPress={()=>this.props.navigation.goBack()} name="ios-arrow-back" size={vh(30)} color={Colors.rosa} style={styles.backButtonStyle} />
                </View>
                <Text style={styles.forgotPasswordTextStyle}>{strings.forgotyourPassword}</Text>
                <Text style={styles.dontWorryTextStyle}>{strings.dontWorry}</Text>
                <View style={[styles.emailInputViewStyle, { borderBottomColor: this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <Icon
                        style={styles.searchIcon}
                        name="envelope-o" size={vw(13.4)}
                        color={this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'}
                    />
                    <TextInput
                        style={[styles.emailTextInputStyle]}
                        placeholder="Enter Email"
                        returnKeyType='next'
                        onChangeText={text => { this.setState({ email: text }) }} />
                </View>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle}>
                    <TouchableOpacity style = {styles.submitButtonStyle}>
                        <Text style={styles.loginButtonTitleStyle}>Submit</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}