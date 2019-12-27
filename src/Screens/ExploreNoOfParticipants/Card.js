import React, {PureComponent} from 'react';
import {View, TouchableOpacity, FlatList, Text, Image} from 'react-native';
import styles from './styles';

import {vh} from '../../Constants/Dimension';
import {ScrollView} from 'react-native-gesture-handler';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    itemTapped = props.navigation.state.params.itemTapped.item;
  }

  renderItems = rowData => {
    return (
      <View style={styles.cardRowStyle}>
        <Text numberOfLines={1} style={styles.cardRowNameStyle}>
          {rowData.item.userName}
        </Text>
        <Text numberOfLines={1} style={styles.cardRowGenderStyle}>
          {rowData.item.gender}
        </Text>
        <Text numberOfLines={1} style={styles.cardRowAgeStyle}>
          {rowData.item.age}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <TouchableOpacity style={styles.cardContainerStyle} onPress={()=>this.props.navigation.pop()} >
        <View style={styles.cardViewStyle}>
            <Image
              source={itemTapped.userImage}
              style={[styles.userImageStyle, {marginTop: vh(11)}]}
            />
            <Text style={styles.cardNameStyle}>{itemTapped.userName}</Text>
            <View style={styles.horizontalTitleView}>
              <Text style={styles.cardTitleNameStyle}>NAME</Text>
              <Text style={styles.cardTitleGenderStyle}>GENDER</Text>
              <Text style={styles.cardTitleAgeStyle}>AGE</Text>
            </View>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              data={usersData}
              keyExtractor={item => item.userId.toString()}
              renderItem={this.renderItems}
            />
          </View>
      </TouchableOpacity>
    );
  }
}

const usersData = [
  {userId: 1, userName: 'Sonya Bevis-thomas', gender: 'Male', age: 24},
  {userId: 2, userName: 'Matthew Alexander', gender: 'Male', age: 30},
  {userId: 3, userName: 'James Alexander', gender: 'Male', age: 28},
  {userId: 4, userName: 'Carol Ramírez', gender: 'Female', age: 36},
  {userId: 5, userName: 'Juih Guidelli', gender: 'Male', age: 24},
  {userId: 6, userName: 'Rachel Taylor', gender: 'Female', age: 32},
  {userId: 7, userName: 'Noah William', gender: 'Male', age: 23},
];
