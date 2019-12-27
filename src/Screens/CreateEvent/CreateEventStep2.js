import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Animated } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Toast, CustomSwitch, RadioButton } from '../../ReusableComponents'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import ImagePicker from 'react-native-image-crop-picker';
import { saveCategoryData } from '../../Store/Action/Action'
import { connect } from 'react-redux'
class CreateEventStep2 extends Component {

  state = {
    call: false,
    imageData: [],
    showImages: false,
    familyFriendly: false,
    switchPosition: new Animated.ValueXY({ x: vw(0), y: vh(0) }),
    private: true,
    public: false,
    value: '',
    // selected: this.props.selected
  }

  resetCall = (value) => {
    this.setState({
      call: value
    })
  }


  clicked(check, id) {
    if (id === 1) {
      this.setState({
        private: check,
        public: !check
      })
    } else {
      this.setState({
        private: !check,
        public: check
      })
    }
  }

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      var data = this.state.imageData;
      data.push(image.path);
      this.setState({ imageData: data.splice(0) });
    });
    this.setState({
      showImages: true
    })
  }

  callAlert = () => {
    if (this.state.imageData === [] || this.props.selected === false || this.state.value === '') {
      this.resetCall(true)
    } else {
      this.props.navigation.navigate('CreateEventStep3')
    }
  }

  delete = (id) => {
    let temp = this.state.imageData
    temp.splice(id, 1)
    this.setState({
      imageData: temp
    })
    setTimeout(() => {
      if (this.state.imageData === []) {
        this.setState({
          showImages: false
        })
        this.forceUpdate()
      }
    }, 200);
  }

  toggleSwitch() {
    this.setState({
      familyFriendly: !this.state.familyFriendly
    })
  };

  renderData = (rowData) => {
    const { item, index } = rowData
    return (
      <>
        <Image
          source={{ uri: item }}
          style={styles.flatlistImage}
        />
        <View style={styles.delete} >
          <TouchableOpacity onPress={() => this.delete(index)}  >
            <VectorIcons.MaterialIcons name='cancel' size={vh(25)} color={Colors.red} />
          </TouchableOpacity>
        </View>
      </>
    )
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonStyle} activeOpacity={1} >
            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
            <Text style={styles.headerText} > {strings.createEvent} </Text>
          </TouchableOpacity>
          <View style={styles.skipView} >
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('InfoForFamily')} >
              <VectorIcons.Ionicons name="ios-information-circle-outline" size={vh(18)} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('SaveModal')} >
              <Text style={styles.skipText} > {strings.save} </Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} bounces={false}   >
          <Text style={styles.stepText} > {strings.createEventStep2} </Text>
          <Progress.Bar style={styles.progressBar} progress={50 / 100} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />

          <View style={styles.textBox} >
            <TextInput
              style={styles.textInputBox}
              placeholder='Description'
              multiline={true}
              value={this.state.value}
              onChangeText={(text) => this.setState({ value: text })}
            />
          </View>
          <Text style={styles.addPhoto} > {strings.addPhoto} </Text>
          <View style={[styles.addPhotoView, { height: this.state.showImages ? vh(253.7) : vh(193.3) }]}>
            <View style={styles.addPhotoSelect} >
              <TouchableOpacity style={styles.addPhotoButton} onPress={() => this.pickImage()} >
                <View style={styles.rowStyle}>
                  <VectorIcons.Foundation name='photo' size={vh(18)} color={Colors.white} />
                  <Text style={styles.addPhotoText} > {strings.addPhoto} </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.addphotoDescrption} > {strings.addPhotoTextString} </Text>
            {this.state.showImages &&
              <FlatList
                data={this.state.imageData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderData}
                style={styles.flatlist}
                horizontal
              />
            }
          </View>
          <Text style={styles.addPhoto} > {strings.category} </Text>
          <View style={styles.selectView}>
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CategorySelectModal')} style={styles.selectedStyle}  >
              <Text style={styles.select} > {this.props.selected ? (" " + this.props.savedCategories) : strings.select} </Text>
              <VectorIcons.Ionicons name='ios-arrow-down' size={vh(25)} color={Colors.fadedGray} style={styles.iconStyle} />
            </TouchableOpacity>
            <View style={styles.separator3} />
            <View style={styles.family}>
              <Text style={styles.select} > {strings.familyFriendly} </Text>
              <View style={styles.select2} >
                <Text style={styles.familyText} > {this.state.familyFriendly ? strings.Yes : strings.No} </Text>
                <View style={styles.switch} >
                  <CustomSwitch switchEnabled={this.state.familyFriendly} switchPosition={this.state.switchPosition} toggleSwitch={() => this.toggleSwitch()} />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.addPhoto} > {strings.eventType} </Text>

          <View style={styles.eventType} >
            <View style={styles.RadioButton} >
              <TouchableOpacity onPress={() => { this.clicked(true, 1) }}>
                <RadioButton innerCircleDimension={12} outerCircleDimension={20} buttonSize={25} outColor={this.state.private ? Colors.fadedRed : Colors.fadedGray} inColor={Colors.fadedRed} isCheck={this.state.private} />
              </TouchableOpacity>
              <Text style={[styles.radioText, { color: this.state.private ? Colors.black : Colors.fadedGray }]} > {strings.private} </Text>
            </View>

            <View style={styles.RadioButton2} >
              <TouchableOpacity onPress={() => { this.clicked(true, 2) }} >
                <RadioButton innerCircleDimension={12} outerCircleDimension={20} outColor={this.state.public ? Colors.fadedRed : Colors.fadedGray} inColor={Colors.fadedRed} isCheck={this.state.public} />
              </TouchableOpacity>
              <Text style={[styles.radioText, { color: this.state.public ? Colors.black : Colors.fadedGray }]} > {strings.public} </Text>
            </View>
          </View>


        </KeyboardAwareScrollView>
        <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyleGradient}  >
          <TouchableOpacity
            onPress={() => this.callAlert()}
            activeOpacity={1}
          >
            <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={Colors.white} style={styles.icon} />
          </TouchableOpacity>
        </LinearGradient>
        {this.state.call === true &&
          <Toast top={-15} from={0} to={-60} message={strings.fillAll} call={(value) => this.resetCall(value)} />
        }
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    saveCategoryData: (value) => dispatch(saveCategoryData(value)),
  }
}

function mapStateToProps(state) {
  const { savedCategories, selected } = state.Reducer;
  return {
    savedCategories,
    selected
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEventStep2);
