import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

/**
 * custom imports
 */
import { styles } from './styles'
import strings from '../../Constants/Strings'
import { vw, vh, DesignWidth } from '../../Constants/Dimension'
import Colors from '../../Constants/Colors'
import { Toast } from '../../ReusableComponents'

const colors = [Colors.fadedRed,Colors.darkishPink]

export default class ForgotPassword extends PureComponent {
    state = {
        email: '', call: false, submit:  false
    }
    componentDidMount(){
        this.input1.focus()
    }

    emailValidation = (email) => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || this.state.email === '') {
            this.resetCall(true)
        } else {
            this.setState({
                submit: true
            })
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{ width: vw(DesignWidth) }}>
                    <VectorIcons.Ionicons onPress={()=>this.props.navigation.goBack()} name="ios-arrow-back" size={vh(30)} color={Colors.rosa} style={styles.backButtonStyle} />
                </View>
                <Text style={styles.forgotPasswordTextStyle}>{strings.forgotyourPassword}</Text>
                <Text style={styles.dontWorryTextStyle}>{strings.dontWorry}</Text>
                <View style={[styles.emailInputViewStyle, { borderBottomColor: this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)' }]}>
                    <VectorIcons.FontAwesome
                        style={styles.searchIcon}
                        name="envelope-o" size={vw(13.4)}
                        color={this.state.email.length == 0 ? 'rgb(0,0,0)' : 'rgb(226,90,113)'}
                    />
                    <TextInput
                        placeholder={strings.emailPlaceholder}
                        style={[styles.emailTextInputStyle]}
                        placeholderTextColor={Colors.black}
                        returnKeyType='done'
                        returnKeyLabel='Submit'
                        value={this.state.email}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ email: text })}
                        onSubmitEditing={() => this.emailValidation(this.state.email)}
                        ref={(ref) => { this.input1 = ref }}
                    />
                </View>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle}>
                    <TouchableOpacity style = {styles.submitButtonStyle} onPress = {()=> this.emailValidation(this.state.email) } >
                        <Text style={styles.loginButtonTitleStyle}>Submit</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {this.state.call === true &&
                    <Toast top={-40} from={30} to={-40} message={strings.Email} call={(value) => this.resetCall(value)} />
                }
                {this.state.submit === true &&
                    <Toast top={-40} from={30} to={-40} message={strings.responseEmail} call={(value) => this.resetCall(value)} />
                }
            </View>
        )
    }
}