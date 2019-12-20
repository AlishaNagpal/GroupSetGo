import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../../../../CreateEvent/styles'
import { strings, Colors, vh } from '../../../../../Constants'
import { categoryModalDataPart2} from '../../../../../Store/Action/Action'
import { connect } from 'react-redux'
import { CheckBox } from '../../../../../ReusableComponents'

class CategorySelectModalPart2 extends Component {
  clicked = (id, check) => {
    let temp = this.props.categoryDataType2
    let indexTofind = temp.findIndex(item => item.id === id)
    if (indexTofind !== -1) {
      temp[indexTofind].selected = check
    }
  }

  renderData = (rowData) => {
    const { item } = rowData
    return (
      <View style={styles.flatlistMainView} >
        <View style={styles.roundBlack} />
        <View style={styles.space} >
          <Text style={styles.categoryText} > {item.name} </Text>
          <View style={styles.CheckBox} >
            <CheckBox
              isCheck={item.selected}
              id={item.id}
              clicked={(id, check) => this.clicked(id, check)}
              outerColor={Colors.lightGray}
              innerColor={Colors.fadedRed}
              outerSize={vh(18)}
              innerSize={vh(18)}
            />
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containerStyleModal}>
        <View style={styles.category} >
          <View style={styles.categoryHeader} >
            <Text style={styles.categoryHeaderText} > {strings.selectCategories} </Text>
          </View>
          <FlatList
            data={this.props.categoryDataType2}
            keyExtractor={(item, index) => item.toString() + index.toString()}
            renderItem={this.renderData}
            showsVerticalScrollIndicator={false}
            bounces={false}
          />

          <TouchableOpacity onPress={() => this.props.navigation.goBack()} activeOpacity={1} >
            <View style={styles.categoryFooter} >
              <Text style={styles.categoryHeaderText} > {strings.done} </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    categoryModalDataPart2: () => dispatch(categoryModalDataPart2()),
  }
}

function mapStateToProps(state) {
  const { categoryDataType2 } = state.Reducer;
  return {
    categoryDataType2,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelectModalPart2);
