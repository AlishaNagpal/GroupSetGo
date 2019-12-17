// import React, { Component } from 'react';
// import { View, TouchableOpacity } from 'react-native';
// import { Colors, vh, vw } from '../Constants';

// export default class CheckBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isCheck: this.props.isCheck};
//   }

//   checkClicked = async () => {
//     await this.setState(prevState => ({
//       isCheck: !prevState.isCheck,
//     }))
//     this.props.clicked && this.props.clicked(this.props.id,this.state.isCheck );
//   }

//   render() {
//     return (
//       <TouchableOpacity onPress={this.checkClicked} style={this.props.style} activeOpacity={1}>
//         <View style={{
//           height: vh(24),
//           width: vh(24),
//           borderWidth: vw(2),
//           borderRadius: vh(0.7),
//           borderColor: Colors.fadedGray2,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//           <View style={{
//             height: vh(12),
//             width: vh(12),
//             backgroundColor: this.state.isCheck ? Colors.darkGreen : Colors.white,
//           }} />
//         </View>
//       </TouchableOpacity>
//     )
//   }
// }

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Colors, vh, vw, VectorIcons } from '../Constants';

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {isCheck: this.props.isCheck};
  }

  checkClicked = async () => {
    this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    }))
    this.props.clicked && this.props.clicked(this.props.id,this.state.isCheck );
  }

  render() {
    return (
      <TouchableOpacity onPress={this.checkClicked} style={this.props.style} activeOpacity={1}>
        <View style={{
          height: vh(24),
          width: vh(24),
          borderWidth: vw(2),
          borderRadius: vh(0.7),
          borderColor: Colors.fadedGray2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{
            height: vh(20),
            width: vh(20),
            // backgroundColor: this.state.isCheck ? Colors.darkGreen : Colors.white,
          }} >
            {this.state.isCheck ? <VectorIcons.MaterialCommunityIcons
              name='check'
              color={Colors.darkGray2}
              size={vh(20)}
              /> : null }
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}