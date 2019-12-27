import { StyleSheet } from 'react-native';
import {vh,vw, Colors, DesignHeight, DesignWidth} from '../../Constants'

export default styles = StyleSheet.create({
      myLogo:{
        height: DesignHeight,
        width: DesignWidth,
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
