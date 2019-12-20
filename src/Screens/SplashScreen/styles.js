import { StyleSheet } from 'react-native';
import {vh,vw, Colors} from '../../Constants'

export default styles = StyleSheet.create({
    container: {
        position: 'absolute',
      },
      myLogo:{
          position: 'absolute',
          top: vh(200),
          left: vw(80),
      },
      logoStyle: {
        height: vh(45),
        width: vh(45),
        position: 'absolute',
        resizeMode: "contain"
      },
      textStyle: {
        color: Colors.darkPink,
        fontSize: vh(30),
        position: 'absolute'
      },
})
