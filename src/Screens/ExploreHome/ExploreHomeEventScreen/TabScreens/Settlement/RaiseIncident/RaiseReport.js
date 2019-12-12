import React, { PureComponent } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { Colors, VectorIcons, vh, strings } from '../../../../../../Constants';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import { Toast } from '../../../../../../ReusableComponents'


export default class FlagInappropriate extends PureComponent {
    state = { call: false, value: '' }

    callAlert = () => {
        if (this.state.value === '') {
            this.resetCall(true)
        } else {
            this.props.navigation.navigate('Response')
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
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails6')} style={styles.backButtonStyle}>
                        <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
                        <Text style={styles.headerText} > Raise Incident </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textInputBox} >
                    <TextInput
                        placeholder={strings.description}
                        style={styles.descriptionBox}
                        multiline={true}
                        value={this.state.value}
                        onChangeText={(text) => this.setState({ value: text })}
                    />
                    <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
                        <TouchableOpacity onPress={() => this.callAlert()}  >
                            <Text style={styles.buttonText} > {strings.submit} </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    {this.state.call === true &&
                        <Toast top={-60} from={-30} to={-100} message={strings.enterData} call={(value) => this.resetCall(value)} />
                    }

                </View>
            </View>
        );
    }
}

