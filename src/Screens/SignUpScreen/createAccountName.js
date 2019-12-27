import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Toast } from '../../ReusableComponents'
import { connect } from 'react-redux'

//Custom Imports
import styles from './styles'
import { setData } from '../../Store/Action/Action'
import { Colors, vh, VectorIcons, strings } from '../../Constants';
const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]

class createAccountName extends PureComponent {

    state = { firstName: '', lastName: '', call: false }

    nameValidation = (firstName, lastName) => {
        if (!(/^[a-zA-Z ]+$/.test(firstName)) || !(/^[a-zA-Z ]+$/.test(lastName)) || this.state.firstName === '' || this.state.lastName === '') {
            this.resetCall(true)
        }else{
            this.props.setData('name', firstName+' '+lastName)
            this.props.navigation.navigate('createAccountEmail')
        }
    }

    resetCall = (value) => {
        this.setState({
            call: value
        })
    }

    componentDidMount(){
        this.input1.focus()
    }


    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient} >
                <KeyboardAwareScrollView keyboardShouldPersistTaps = {'always'} >
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} >
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                    </TouchableOpacity>

                    <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome} </Text>
                    <Text style={styles.mainHeading}> {strings.created} </Text>
                    <Text style={styles.stepText} > {strings.step1} </Text>
                    <Text style={styles.belowStep} > {strings.name} </Text>
                    <Text style={styles.description}> {strings.nameDescription} </Text>

                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={strings.firstName}
                        placeholderTextColor={Colors.black}
                        returnKeyType='next'
                        returnKeyLabel='Next'
                        autoCorrect={false}
                        value={this.state.firstName}
                        onChangeText={(text) => this.setState({ firstName: text })}
                        ref={(ref) => { this.input1 = ref }}
                        onSubmitEditing={() => this.input2.focus()}

                    />
                    <TextInput
                        style={[styles.textInputStyle, { marginTop: vh(14) }]}
                        placeholder={strings.lastName}
                        placeholderTextColor={Colors.black}
                        returnKeyType='done'
                        returnKeyLabel='Submit'
                        autoCorrect={false}
                        value={this.state.lastName}
                        onChangeText={(text) => this.setState({ lastName: text })}
                        ref={(ref) => { this.input2 = ref }}
                        onSubmitEditing={() => this.nameValidation(this.state.firstName, this.state.lastName)}
                    />

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=> this.nameValidation(this.state.firstName, this.state.lastName) }
                        activeOpacity={1}
                    >
                        <Text style={styles.buttonText}> {strings.next} </Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>

                {this.state.call === true &&
                    <Toast top={-40} from={30} to={-40} message={strings.Name} call={(value) => this.resetCall(value)} />
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
  )(createAccountName);