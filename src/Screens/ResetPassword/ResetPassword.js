import React, { PureComponent } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Ionicons'
Icon1.loadFont()
Icon2.loadFont()
Icon3.loadFont()


/**
 * custom imports
 */
import { styles } from './styles'
import strings from '../../Constants/Strings'
import Colors from '../../Constants/Colors'
import { vw, vh, DesignWidth } from '../../Constants/Dimension'

export default class ResetPassword extends PureComponent {
    state = {
        newPassword: '',
        confirmPassword: '',
        passwordVisible: false
    }

    togglePasswordVisibility = () => {
        this.setState({
            passwordVisible: !this.state.passwordVisible
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ width: vw(DesignWidth) }}>
                    <TouchableOpacity onPress={this.props.toggleModalVisibility}>
                        <Icon3 name="ios-arrow-back" size={vh(30)} color={Colors.rosa} style={styles.backButtonStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.resetPasswordTextStyle}>{strings.resetPassword}</Text>
                <Text style={styles.keepItStrongTextStyle}>{strings.keepItStrong}</Text>
                <View style={[styles.newPasswordInputViewStyle, { borderBottomColor: this.state.newPassword.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <Icon1
                        style={styles.searchIcon}
                        name="lock"
                        size={vw(16.4)}
                        color={this.state.newPassword.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'}
                    />
                    <TextInput
                        style={styles.passwordTextInputStyle}
                        placeholder="Enter new password"
                        returnKeyType='next'
                        secureTextEntry={this.state.passwordVisible ? true : false}
                        onChangeText={text => { this.setState({ newPassword: text }) }} />
                    {this.state.newPassword.length != 0 &&
                        <Icon2
                            name={this.state.passwordVisible ? "eye-off-outline" : "eye-outline"}
                            size={vw(16.4)}
                            onPress={this.togglePasswordVisibility}
                        />
                    }
                </View>
                <View style={[styles.confirmPasswordInputViewStyle, { borderBottomColor: this.state.confirmPassword.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <Icon1
                        style={styles.searchIcon}
                        name="lock"
                        size={vw(16.4)}
                        color={this.state.confirmPassword.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'}
                    />
                    <TextInput
                        style={styles.passwordTextInputStyle}
                        placeholder="Confirm new password"
                        returnKeyType='done'
                        secureTextEntry={this.state.passwordVisible ? true : false}
                        onChangeText={text => { this.setState({ confirmPassword: text }) }} />
                    {this.state.confirmPassword.length != 0 &&
                        <Icon2
                            name={this.state.passwordVisible ? "eye-off-outline" : "eye-outline"}
                            size={vw(16.4)}
                            onPress={this.togglePasswordVisibility}
                        />
                    }
                </View>
                <TouchableOpacity style={styles.resetButtonStyle}>
                    <Text style={styles.loginButtonTitleStyle}>Reset</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
