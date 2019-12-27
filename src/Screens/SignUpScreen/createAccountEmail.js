import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Toast } from '../../ReusableComponents'
import { connect } from 'react-redux'

//Custom Imports
import styles from './styles'
import { setData } from '../../Store/Action/Action'
import { VectorIcons, Colors, vh, strings } from '../../Constants';
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

class createAccountEmail extends PureComponent {
    state = { email: '', call: false }
    componentDidMount(){
        this.input1.focus()
    }

    emailValidation = (email) => {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || this.state.email === '') {
            this.resetCall(true)
        } else {
            this.props.setData('email',email)
            this.props.navigation.navigate('createAccountBirth')
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView keyboardShouldPersistTaps = {'always'} >
                    <TouchableOpacity onPress={() => { this.props.navigation.pop() }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>

                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome}  </Text>
                    <Text style={styles.mainHeading}> {strings.created} </Text>
                    <Text style={styles.stepText} > {strings.step2} </Text>
                    <Text style={styles.belowStep} > {strings.email} </Text>
                    <Text style={styles.description}> {strings.emailDescription} </Text>
                    <TextInput
                        placeholder={strings.emailPlaceholder}
                        style={[styles.textInputStyle, { marginTop: vh(42.7) }]}
                        placeholderTextColor={Colors.black}
                        returnKeyType='done'
                        returnKeyLabel='Submit'
                        value={this.state.email}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({ email: text })}
                        onSubmitEditing={() => this.emailValidation(this.state.email)}
                        ref={(ref) => { this.input1 = ref }}
                    />

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => this.emailValidation(this.state.email)}
                    >
                        <Text style={styles.buttonText}> {strings.next} </Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
                {this.state.call === true &&
                    <Toast top={-40} from={30} to={-40} message={strings.Email} call={(value) => this.resetCall(value)} />
                }
            </LinearGradient>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setData: (key, value) => dispatch(setData(key, value))
    }
  }
  
  function mapStateToProps(state) {
    const { profileData } = state.Reducer;
    return {
        profileData
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(createAccountEmail);