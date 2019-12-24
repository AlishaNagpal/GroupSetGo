import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from './styles';
import strings from '../../../../../Constants/Strings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { eventDATA } from '../../../../../Store/Action/Action'
import LinearGradient from 'react-native-linear-gradient'
import { Colors} from '../../../../../Constants'

const colors = [Colors.fadedRed, Colors.darkishPink]

class Settlement extends Component {

  state = {
    data: ''
  }

  componentDidMount() {
    this.getData(this.props.screenProps.screenProps.id);
  }

  getData = (id) => {
    let temp = this.props.Event_Data
    let indexToEdit = temp.findIndex(item => item.serialNo == id)
    let newData = temp[indexToEdit]
    if (indexToEdit != -1) {
      this.setState({
        data: newData
      })
    }
  }


  renderPriceDetailsList = (rowData) => {
    const { item } = rowData
    return (
      <View style={styles.listRowStyle}>
        <Image source={item.iconUri} style={styles.listIconStyle} />
        <Text style={styles.titleStyle}>{item.title}</Text>
        <Text style={styles.amountStyle}>{item.amount}</Text>
      </View>
    );
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.priceDetailsHeadingStyle}>
          {strings.priceDetails}
        </Text>
        <View style={styles.budgetViewStyle}>
          <Text style={styles.totalBudgetHeadingStyle}>
            {strings.totalBudget}
          </Text>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.amountTextStyle}> {data.personalBudget} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.priceDetailsViewStyle}>
          <FlatList
            data={data.priceDetailsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderPriceDetailsList}
            scrollEnabled={false}
          />
          <View style={styles.finalBudgetView}>
            <Text style={styles.finalBudgetText}>
              {strings.finalBudget}
            </Text>
            <Text style={styles.finalBudgetValue}> {data.finalBudget} </Text>
          </View>
          <View style={styles.amountView}>
            <Text style={styles.amountText}>
              {strings.amountRefunded}
            </Text>
            <Text style={styles.refundStyle}>{data.refund} </Text>
          </View>
        </View>
        <View style={styles.raiseIncident}>
          <TouchableOpacity
            style={styles.raiseIncidentButton}
            onPress={() => this.props.screenProps.navigation.navigate('RaiseIncident')}
          >
            <Text style={styles.raiseIncidentText}> {strings.raiseIncedent} </Text>
          </TouchableOpacity>
          <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}  >
            <TouchableOpacity
              onPress={() => { this.props.screenProps.navigation.navigate('RateAndReviewStep1', {id: this.props.screenProps.screenProps.id})}}
              // onPress={() => console.warn('props ', navigation)}
              style={styles.rateReviewButton}>
              <Text style={styles.rateReviewText}> {strings.rateReview} </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    eventDATA: () => dispatch(eventDATA())
  }
}

function mapStateToProps(state) {
  const { Event_Data } = state.Reducer;
  return {
    Event_Data
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settlement);
