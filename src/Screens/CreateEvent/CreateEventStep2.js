import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { VectorIcons, vh, Colors, strings, vw } from '../../Constants'
import * as Progress from 'react-native-progress';
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Toast } from '../../ReusableComponents'
import LinearGradient from 'react-native-linear-gradient'
const colors = [Colors.fadedRed, Colors.darkishPink]
import ImagePicker from 'react-native-image-crop-picker';

export default class CreateEventStep1 extends Component {

  state = {
    call: false,
    imageData: [],
    showImages: false
  }

  resetCall = (value) => {
    this.setState({
      call: value
    })
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
      // console.log(this.state.imageData)
    });
    this.setState({
      showImages: true
    })
  }

  callAlert = () => {
    // if (this.state.title === '' || this.state.Hashtag === '' || this.state.Address === '' || this.state.Event_Date === '' || this.state.Start_Time === '' || this.state.Duration === '') {
    //   this.resetCall(true)
    // } else {
    //   this.props.navigation.navigate('CreateEventStep3')
    // }
  }

  delete = (id) => {
    let temp = this.state.imageData
    console.log(id)
    temp.splice(id, 1)
    this.setState({
      imageData: temp
    })
  }

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
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButtonStyle}>
            <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} />
            <Text style={styles.headerText} > {strings.createEvent} </Text>
          </TouchableOpacity>
          <View style={styles.skipView} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SaveModal')} >
              <Text style={styles.skipText} > {strings.save} </Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}  >
          <Text style={styles.stepText} > {strings.createEventStep2} </Text>
          <Progress.Bar style={styles.progressBar} progress={25 / 100} width={vw(388)} color={Colors.green} unfilledColor={Colors.progressBarColor} borderColor={Colors.progressBarColor} animated={true} />

          <View style={styles.textBox} >
            <TextInput
              style={styles.textInputBox}
              placeholder='Description'
              multiline={true}
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
            <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('CategorySelectModal')} >
              <Text style={styles.select} > {strings.select} </Text>
            </TouchableOpacity>
            <View style={styles.separator3} />
          </View>

          <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.buttonStyle}  >
            <TouchableOpacity
              onPress={() => this.callAlert()}
              activeOpacity={1}
            >
              <VectorIcons.Ionicons name='ios-arrow-round-forward' size={vh(55)} color={Colors.white} style={styles.icon} />
            </TouchableOpacity>
          </LinearGradient>
        </KeyboardAwareScrollView>
        {this.state.call === true &&
          <Toast top={-15} from={0} to={-60} message={strings.fillAll} call={(value) => this.resetCall(value)} />
        }
      </View>
    );
  }
}
