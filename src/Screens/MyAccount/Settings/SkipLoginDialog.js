import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

/**
 * custom imports
 */
import styles from './styles'
import { Logout } from '../../../Store/Action/Action'
import { Strings, Colors } from '../../../Constants'

class SkipLoginDialog extends PureComponent {

    state = {
        isLoading: false
    }
 
    logout = () => {
        this.setState({
            isLoading: true
        })
        this.props.Logout()
        switch (this.props.profileData.type) {
            case 'fb':
                LoginManager.logOut()
                break
            case 'google':
                signOut = async () => {
                    try {
                        await GoogleSignin.revokeAccess();
                        await GoogleSignin.signOut();
                    } catch (error) {
                        console.error(error);
                    }
                };
                break
            default: break
        }
        this.props.navigation.navigate('AuthStack')
    }

    render() {
        
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} style={styles.containerStyle}>
                <TouchableOpacity activeOpacity={1} style={styles.dialogboxStyle}>
                    <Text style={styles.alertTextStyle}>Do you really want to{'\n'} Logout ?</Text>
                    {this.state.isLoading && <ActivityIndicator size='large' color={Colors.darkishPink} animating={true} style={styles.indicator} />}
                    <View style={styles.buttonsViewStyle}>
                        <TouchableOpacity onPress={this.logout} activeOpacity={1} style={styles.yesContinueButtonStyle}>
                            <Text style={styles.yesContinueTextStyle}>LogOut</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} style={styles.loginButtonStyle}>
                            <Text style={styles.loginTextStyle}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Logout: () => dispatch(Logout())
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