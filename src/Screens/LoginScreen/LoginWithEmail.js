import React, { PureComponent } from 'react'
import { Text, View, Image, Modal, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
Icon.loadFont()
Icon1.loadFont()
Icon2.loadFont()


/**
 * custom imports
 */
import { styles } from './styles'
import strings from '../../Constants/Strings'
import { vw, } from '../../Constants/Dimension'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import images from '../../Constants/images'


export default class LoginWithEmail extends PureComponent {
    state = {
        isFocusedEmail: false,
        isFocusedPassword: false,
        email: '',
        password: '',
        passwordVisible: false,
        forgotModalVisible: false,
        modalVisible: this.props.modalVisible
    }

    togglePasswordVisibility = () => {
        this.setState({
            passwordVisible: !this.state.passwordVisible
        })
    }

    forgotPasswordModel = () => {
        this.setState({
            forgotModalVisible: !this.state.forgotModalVisible
        })
    }
    render() {
        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={this.props.toggleModalVisibility}>
                {this.state.forgotModalVisible && <ForgotPassword
                    modalVisible={this.state.forgotModalVisible}
                    forgotPasswordModel={() => this.forgotPasswordModel()}
                />}
                <View style={styles.containerStyle}>
                    <TouchableOpacity
                        onPress={this.props.toggleModalVisibility}>
                        <Image
                            source={images.crossImage}
                            style={styles.crossButtonStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.welcomeBackStyle}>{strings.welcomeBack}</Text>
                    <Text style={styles.signInToContinueStyle}>{strings.signInToContinue}</Text>
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
                    <View style={[styles.passwordInputViewStyle, { borderBottomColor: this.state.password.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                        <Icon1
                            style={styles.searchIcon}
                            name="lock"
                            size={vw(16.4)}
                            color={this.state.password.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'}
                        />
                        <TextInput
                            style={styles.passwordTextInputStyle}
                            placeholder="Enter password"
                            returnKeyType='done'
                            secureTextEntry={this.state.passwordVisible ? true : false}
                            onChangeText={text => { this.setState({ password: text }) }} />
                        {this.state.password.length != 0 &&
                            <Icon2
                                name={this.state.passwordVisible ? "eye-off-outline" : "eye-outline"}
                                size={vw(16.4)}
                                onPress={this.togglePasswordVisibility} />
                        }
                    </View>
                    <TouchableOpacity onPress={this.forgotPasswordModel}>
                        <Text style={styles.forgotPasswordTextStyle}>Forgot password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.loginButtnTapped} style={styles.loginButtonStyle}>
                        <Text style={styles.loginButtonTitleStyle}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.createAnAccountViewStyle}>
                        <Text style={styles.newToGroupSetGoStyle}>{strings.newToGroupSetGo}</Text>
                        <TouchableOpacity onPress={() => {
                            this.setState({ modalVisible: false }, () => {
                                this.props.toggleModalVisibility
                                this.props.navProps.navigate("createAccountName")
                            })
                        }}>
                            <Text style={styles.createAccountTextStyle}>Create an account </Text>
                        </TouchableOpacity>
                    </View>
                </View >

            </Modal>
        );
    }
}

