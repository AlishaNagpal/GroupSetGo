import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'

//Custom Imports
import styles from './styles'
import { setData } from '../../Store/Action/Action'
import { Colors, vh, VectorIcons, strings } from '../../Constants';
import RadioButton from '../../ReusableComponents/RadioButton'

const colors = [Colors.moderateRed, Colors.moderatePink, Colors.darkModeratePink, Colors.darkViolet, Colors.darkViolet, Colors.darkViolet]
// male --> true , female --> false
class createAccountGender extends PureComponent {
    state = {gender: true}
    clicked(id) {
        if (id === 1) {
            this.setState({
                gender: true
            }, () => {this.props.setData('gender',this.state.gender ? 'male' : 'female')})
        } else {
            this.setState({
                gender: false
            }, () => {this.props.setData('gender',this.state.gender ? 'male' : 'female')})
        }
    }



    render() {
        return (
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} colors={colors} style={styles.gradient}>
                <TouchableOpacity onPress={() => { this.props.navigation.pop() }} >
                    <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.iconPos} />
                </TouchableOpacity>
                <Text style={[styles.mainHeading, { marginTop: vh(100) }]}> {strings.awesome} </Text>
                <Text style={styles.mainHeading}> {strings.created} </Text>
                <Text style={styles.stepText} > {strings.step4} </Text>
                <Text style={styles.belowStep} > {strings.gender} </Text>
                <Text style={styles.description}> {strings.genderDescription} </Text>

                <View style={styles.radioButtonView} >
                    <TouchableOpacity onPress={() => { this.clicked(1) }}  style={styles.radioButton} >
                        <RadioButton innerCircleDimension = {16} outerCircleDimension = {30} buttonSize = {25} outColor={Colors.white} inColor={Colors.white} isCheck={this.state.gender} />
                    </TouchableOpacity>
                    <Text style={styles.radioText} > {strings.male} </Text>
                </View>

                <View style={[styles.radioButtonView,{marginTop: vh(30)}]} >
                <TouchableOpacity onPress={() => { this.clicked(2) }} style={styles.radioButton} >
                    <RadioButton innerCircleDimension = {16} outerCircleDimension = {30} outColor={Colors.white} inColor={Colors.white} isCheck={!this.state.gender} />
                </TouchableOpacity>
                <Text style={styles.radioText} > {strings.female} </Text>
                </View>
                  

                <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.props.navigation.navigate('createAccountPassword') }} >
                    <Text style={styles.buttonText}> {strings.next} </Text>
                </TouchableOpacity>
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
  )(createAccountGender);