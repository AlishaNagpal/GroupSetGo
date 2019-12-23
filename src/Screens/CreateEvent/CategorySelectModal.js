import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles'
import { strings, Colors, vh } from '../../Constants'
import { categoryModalData, saveCategoryData, SELECTED, getCategoryData } from '../../Store/Action/Action'
import { connect } from 'react-redux'
import { CheckBox } from '../../ReusableComponents'

class CategorySelectModal extends Component {
  clicked = (id, check) => {
    let temp = this.props.categoryData
    let indexTofind = temp.findIndex(item => item.id === id)
    if (indexTofind !== -1) {
      this.props.categoryData[indexTofind].selected = check
    }
    if (check === true) {
      this.props.saveCategoryData(temp[indexTofind].name)
      this.props.SELECTED(true)
    } else {
      let temporary = this.props.savedCategories
      let index = temporary.findIndex(item => item === temp[indexTofind].name)
      if (index !== -1) {
        this.props.savedCategories.splice(index, 1)
        this.props.getCategoryData()

        setTimeout(() => {
          if (this.props.savedCategories.length === 0) {
            this.props.SELECTED(false)
          }
        }, 200)

      }
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
            data={this.props.categoryData}
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
    categoryModalData: () => dispatch(categoryModalData()),
    saveCategoryData: (value) => dispatch(saveCategoryData(value)),
    SELECTED: (value) => dispatch(SELECTED(value)),
    getCategoryData: () => dispatch(getCategoryData())
  }
}

function mapStateToProps(state) {
  const { categoryData, savedCategories, selected } = state.Reducer;
  return {
    categoryData,
    savedCategories,
    selected
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySelectModal);
