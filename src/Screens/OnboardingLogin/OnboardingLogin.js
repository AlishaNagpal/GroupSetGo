import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { connect } from 'react-redux'
import { setProfileData } from '../../Store/Action/Action'

/**
 * custom imports
 */
import { styles } from './styles'
import { Colors, Images, strings } from '../../Constants'
import { Toast } from "../../ReusableComponents";

const colors = [Colors.fadedRed, Colors.darkishPink]

GoogleSignin.configure({
  webClientId:'367694714799-r373nckmnddm98u80r8kclndaqtdqcnh.apps.googleusercontent.com',
  androidClientId: '367694714799-ggiakjnsm70som14sqgchjggfbl6hjkh.apps.googleusercontent.com',
  offlineAccess: false
});

class OnboardingLogin extends PureComponent {

    state = { 
      call: false, 
      isLoading: false,
      user: null,
      signInState: false
     }

    resetCall = (value) => {
        this.setState({
            call: value,
        })
    }

    fblogin = () => {
        LoginManager.logInWithPermissions(['public_profile']).then(
          result => {
            this.setState({
              isLoading: true
            })
            if (result.isCancelled) {
              console.log('Login cancelled');
              return;
            } else {
              console.log(
                'Login success with permissions: ' +
                  result.grantedPermissions.toString(),
              );
            }
            {
              AccessToken.getCurrentAccessToken().then(data => {
                let accessToken = data.accessToken;
                console.log(data.accessToken.toString());
                const responseInfoCallback = (error, result) => {
                  if (error) {
                    console.log(error);
                    Alert.alert('Unable to Login, Please try again!')
                    this.setState({
                      isLoading: false
                    })
                  } else {
                    console.log('Success fetching data: ' + JSON.stringify(result));
                    console.log('FB PIC', result.picture);
                    this.props.setProfileData(result.name, result.email, result.picture.data.url, 'fb')
                    console.log('res ',result)
                    console.log('redux res ',this.props.profileData);
                    this.setState({
                      isLoading: false
                    })
                    this.props.navigation.navigate('HomeNavigator');
                  }}
                
                const infoRequest = new GraphRequest(
                  '/me',
                  {
                    accessToken: accessToken,
                    parameters: {
                      fields: {
                        string:
                          'email,name,first_name,middle_name,last_name,picture.type(large)',
                      },
                    },
                  },
                  responseInfoCallback,
                );
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          },
          function(error) {
            console.log('Login fail with error: ' + error);
          },
        );
      };

      signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn().then().catch(error => {
              console.log('err is => ', error)
            });
            console.log('signing in')
            this.setState({ isLoading: true });
            this.getCurrentUserInfo()
        } catch (error) {
          this.setState({
            isLoading: false
          })
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('cancelled the login')

            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('sign in is in progress already')

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('play services not available or outdated')

            } else {
                console.log('user cancelled login', error)
            }
        }
    };

    getCurrentUserInfo = async () => {
      this.setState({
          signInState: false,
      })
      try {
          const userInfo = await GoogleSignin.signInSilently();
          console.log('getting user data')
          this.setState({ user: userInfo.user });
          console.log('user-> ', this.state.user.name, this.state.user.email, this.state.user.photo)
          this.props.setProfileData(this.state.user.name, this.state.user.email, this.state.user.photo, 'google')
          this.setState({
            isLoading: false
          })
          this.props.navigation.navigate('HomeNavigator');
          
      } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
              console.log('not signed in yet')
              // user has not signed in yet  
          } else {
              console.log('some other error')
              // some other error
          }
      }
  };

    render() {
        return (
            <View style={styles.containerStyle}>
              <ActivityIndicator size='large'
                            hidesWhenStopped='true'
                            color= {Colors.darkishPink}
                            animating={this.state.isLoading}
                            style={styles.indicator}
                        />
                <Image
                    style={styles.logoImageStyle}
                    source={Images.logoImage}
                    resizeMode='contain' />
                <Text style={styles.helloStrangerStyle}>{strings.helloStrangers}</Text>
                <Text style={styles.welcomeTextStyle}>{strings.welcomeTo}</Text>
                <Text style={styles.whereSharingTextStyle}>{strings.whereSharingExperiences}</Text>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.gradientStyle} >
                    <TouchableOpacity style={styles.loginButtonStyle}
                        onPress={() => this.props.navigation.navigate("LoginWithEmail")}>
                        <Text style={styles.loginButtonTitleStyle}>Login using email</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.createAnAccountViewStyle}>
                    <Text style={styles.newToGroupSetGoStyle}>{strings.newToGroupSetGo}</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('createAccountName') }}>
                        <Text style={styles.createAccountTextStyle}>Create an account </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.youCanAlsoLoginWithStyle}>{strings.youCanAlsoLoginWith}</Text>
                <View style={styles.socialLoginViewStyle}>
                    <TouchableOpacity onPress={this.fblogin} >
                        <Image style={styles.facebookButtonStyle} source={Images.facebookLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.signIn} >
                        <Image style={styles.googleButtonStyle} source={Images.googleLogo} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomViewStyle} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SkipLoginDialog")} style={styles.skipLoginButtonStyle}>
                        <Text style={styles.skipLoginTextStyle} >{strings.skipLogin}</Text>
                    </TouchableOpacity>
                </View>
                {this.state.call === true &&
                    <Toast top={-40} from={30} to={-40} message={strings.UnderWork} call={(value) => this.resetCall(value)} />
                }
            </View>
        )
    }
}


function mapDispatchToProps(dispatch) {
  return {
    setProfileData: (name, email, profilePic, type) => dispatch(setProfileData(name, email, profilePic, type))
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
)(OnboardingLogin);