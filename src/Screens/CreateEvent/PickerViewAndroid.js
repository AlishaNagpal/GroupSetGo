import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import {Colors } from '../../Constants';
import styles from './styles';
import { connect } from 'react-redux'
import { DURATION_SELECTED } from '../../Store/Action/Action'

class PickerViewAndroid extends Component {

    render() {
        return (
            <View style={styles.DurationAndroid} >
                <Picker
                    selectedValue={this.props.duration}
                    itemStyle={{ backgroundColor: Colors.white}}
                    mode={'dialog'}
                    prompt={'Duration'}
                    onValueChange={(itemValue, itemIndex) =>
                        this.props.DURATION_SELECTED(itemValue)
                    }>
                    <Picker.Item label="Duration" value="Duration" color={Colors.verLightGrey} />
                    <Picker.Item label="0.5 Hrs." value="0.5 Hrs." />
                    <Picker.Item label="1 Hrs." value="1 Hrs." />
                    <Picker.Item label="1.5 Hrs." value="1.5 Hrs." />
                    <Picker.Item label="2 Hrs." value="2 Hrs." />
                    <Picker.Item label="2.5 Hrs." value="2.5 Hrs." />
                    <Picker.Item label="3 Hrs." value="3 Hrs." />
                    <Picker.Item label="3.5 Hrs." value="3.5 Hrs." />
                </Picker>

            </View>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        DURATION_SELECTED: (value) => dispatch(DURATION_SELECTED(value))
    }
}

function mapStateToProps(state) {
    const { duration } = state.Reducer;
    return {
        duration
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PickerViewAndroid);
