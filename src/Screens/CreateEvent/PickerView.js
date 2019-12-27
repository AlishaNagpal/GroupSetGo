import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, View, Picker } from 'react-native'
import { strings, Colors } from '../../Constants';
import styles from './styles';
import { connect } from 'react-redux'
import { DURATION_SELECTED } from '../../Store/Action/Action'

class PickerView extends PureComponent {
    call = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.call} style={styles.containerStylePicker}>
                <View style={styles.cancelConfirm} >
                    <TouchableOpacity style={styles.cancelButton} onPress={this.call} >
                        <Text style={styles.cancelText} > {strings.cancelIt} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.call} >
                        <Text style={styles.confirmText} > {strings.confirm} </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Duration} >
                    <Picker
                        selectedValue={this.props.duration}
                        style={styles.pickerStyle}
                        itemStyle={{ backgroundColor: Colors.white, height: 320 }}
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) =>
                            this.props.DURATION_SELECTED(itemValue)
                        }>
                        <Picker.Item label="0.5 Hrs." value="0.5 Hrs." />
                        <Picker.Item label="1 Hrs." value="1 Hrs." />
                        <Picker.Item label="1.5 Hrs." value="1.5 Hrs." />
                        <Picker.Item label="2 Hrs." value="2 Hrs." />
                        <Picker.Item label="2.5 Hrs." value="2.5 Hrs." />
                        <Picker.Item label="3 Hrs." value="3 Hrs." />
                        <Picker.Item label="3.5 Hrs." value="3.5 Hrs." />
                    </Picker>

                </View>
            </TouchableOpacity>
        )
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
)(PickerView);