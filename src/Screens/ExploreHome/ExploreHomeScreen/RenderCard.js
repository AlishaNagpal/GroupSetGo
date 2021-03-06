import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';

//Custom Imports
import styles from './style'
import { VectorIcons, Images, vh, Colors } from '../../../Constants'
import { connect } from 'react-redux'
import { eventDATA } from '../../../Store/Action/Action'

class RenderCard extends PureComponent {

    state = {
        data: ''
    }

    componentDidMount() {
        let id = this.props.navigation.getParam('id')
        let temp = this.props.Event_Data
        let indexToEdit = temp.findIndex(item => item.serialNo == id)
        let newData = temp[indexToEdit]
        if (indexToEdit != -1) {
            this.setState({
                data: newData,
            })
        }
    }

    callScreen = (id) => {
        this.props.navigation.navigate('HomeDetails6', {
            data: this.props.Event_Data,
            id: { id }
        })
    }

    toggle = (id, value) => {
        let index = this.props.Event_Data.findIndex((e) => e.serialNo === id)
        if (index != -1) {
            this.props.Event_Data[index].hearted = !value
            this.props.eventDATA()
        }
    }

    render() {
        const { data } = this.state
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} style={styles.containerStyle}>
                <View style={styles.mainCardView}>
                    <TouchableOpacity onPress={() => this.callScreen(data.serialNo)} activeOpacity={1} >
                        <Image source={{ uri: data.source }} style={styles.flatlistImage} />
                        <TouchableOpacity onPress={() => { this.toggle(data.serialNo, data.hearted) }} style={styles.heart} activeOpacity={1}  >
                            <Image source={data.hearted ? Images.heartFilled : Images.heartEmpty} />
                        </TouchableOpacity>
                        <View style={styles.cheersView} >
                            <Image source={Images.cheers} style={styles.cheers} />
                        </View>
                        <View style={styles.belowImage} >
                            <View style={styles.goingView} >
                                <Text style={styles.timeText} > {data.time} </Text>
                                <View style={styles.goingIcon} >
                                    <VectorIcons.MaterialCommunityIcons name='run-fast' size={vh(12)} color={Colors.fadedGray} />
                                    <Text style={styles.goingText} > {data.going} </Text>
                                </View>
                            </View>
                            <Text style={styles.headingText} > {data.heading} </Text>
                            <View style={styles.moneyView} >
                                <Text style={styles.place} > {data.place} </Text>
                                <View style={styles.elongatedView} />
                                <Text style={styles.moneyText} > {data.money} </Text>
                                <Text style={styles.moneyPerson} > per person </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
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
)(RenderCard);

