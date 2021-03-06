import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

/**
 * custom imports
 */
import styles from './styles'
import { setData } from '../../Store/Action/Action'
import { Strings, Colors } from '../../Constants'



class SkipLoginDialog extends PureComponent {

    state = {
        isLoading: false
    }

    skipNavigate = async () => {
        this.setState({
            isLoading: true
        })
        await this.props.setData('type', 'skip')
        this.props.navigation.navigate("HomeNavigator")
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity={1} style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>{Strings.alertText}</Text>
                    {this.state.isLoading && <ActivityIndicator size='large' color={Colors.darkishPink} animating={true} style={styles.indicator} />}
                    <View style={styles.buttonsViewStyle}>
                        <TouchableOpacity onPress={this.skipNavigate} activeOpacity={1} style={styles.yesContinueButtonStyle}>
                            <Text style={styles.yesContinueTextStyle}>Yes, Continue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>I'll Login</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
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
)(SkipLoginDialog);