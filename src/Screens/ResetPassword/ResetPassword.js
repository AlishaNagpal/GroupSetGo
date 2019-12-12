import React, { PureComponent } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

/**
 * custom imports
 */
import { styles } from './styles'
import strings from '../../Constants/Strings'
import Colors from '../../Constants/Colors'
import { vw, vh, DesignWidth } from '../../Constants/Dimension'
import { VectorIcons } from '../../Constants'

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
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.rosa} style={styles.backButtonStyle} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.resetPasswordTextStyle}>{strings.resetPassword}</Text>
                <Text style={styles.keepItStrongTextStyle}>{strings.keepItStrong}</Text>
                <View style={[styles.newPasswordInputViewStyle, { borderBottomColor: this.state.newPassword.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <VectorIcons.AntDesign
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
                        <VectorIcons.MaterialCommunityIcons
                            name={this.state.passwordVisible ? "eye-off-outline" : "eye-outline"}
                            size={vw(16.4)}
                            onPress={this.togglePasswordVisibility}
                        />
                    }
                </View>
                <View style={[styles.confirmPasswordInputViewStyle, { borderBottomColor: this.state.confirmPassword.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <VectorIcons.AntDesign
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
                        <VectorIcons.MaterialCommunityIcons
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
