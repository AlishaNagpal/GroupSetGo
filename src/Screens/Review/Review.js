import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { vh, Colors, vw, VectorIcons } from '../../Constants'
import strings from '../../Constants/Strings'
import { connect } from 'react-redux'
import { eventDATA } from '../../Store/Action/Action'

const colors = [Colors.fadedRed, Colors.darkishPink]

class Review extends PureComponent {
    state = {
        acceptedTerms: false,
        data: '',
    }

    componentDidMount() {
        this.getData(this.props.navigation.getParam('id'))
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

    renderCostBreakdownList = (rowData) => {
        const { item } = rowData
        return (
            <View style={styles.listRowStyle}>
                <Text style={styles.typeCostStyle}>{item.typeOfCost}</Text>
                <Text style={styles.listAmountStyle}>{item.amount}</Text>
                <Text style={styles.listPersonCountStyle}>{item.personCount}</Text>
                <Text style={styles.listTotalAmountStyle}>{item.totalAmount}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.headerView}>
                    <VectorIcons.Ionicons name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.backButtonStyle} />
                    <Text style={styles.reviewHeadingStyle}> {strings.review} </Text>
                </TouchableOpacity>

                <View style={styles.containerStyle1}>
                    <Text style={styles.eventNameHeadingStyle}> {this.state.data.hashtagEvent} </Text>
                    <Text numberOfLines={0} style={styles.eventAddressStyle}> {this.state.data.location} </Text>
                    <View style={[styles.eventDateViewStyle, { marginTop: vh(17) }]}>
                        <Text style={styles.eventDate}>{strings.eventDate}</Text>
                        <Text style={styles.lastDate}>{strings.lastDateToLeave}</Text>
                    </View>
                    <View style={[styles.eventDateViewStyle, { marginTop: vh(10) }]}>
                        <Text style={styles.eventDetailsCommonStyle}> {this.state.data.eventDate} </Text>
                        <Text style={[styles.leaveDateStyle, { marginRight: vw(88) }]}>{this.state.data.leaveEventBy}</Text>
                    </View>
                </View>
                <View style={styles.containerStyle2}>
                    <Text style={styles.eventDetailsCommonStyle}>{strings.costBreakdown}</Text>
                    <View style={styles.flatlist}>
                        <FlatList
                            data={this.state.data.costBreakdownData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.renderCostBreakdownList}
                        />
                    </View>
                    <View style={styles.totalCostView}>
                        <Text style={styles.eventDetailsCommonStyle}>{strings.totalCost}</Text>
                        <Text style={styles.eventDetailsCommonStyle}>{this.state.data.totalCost}</Text>
                    </View>
                    <View style={styles.terms}>
                        <VectorIcons.MaterialCommunityIcons
                            name={this.state.acceptedTerms ? 'checkbox-marked-outline' : 'checkbox-blank-outline'}
                            color={this.state.acceptedTerms ? Colors.fadedRed : Colors.fadedGray2}
                            size={vw(20)}
                            onPress={() => { this.setState({ acceptedTerms: !this.state.acceptedTerms }) }} />
                        <Text style={styles.termsText}>{strings.agreeToTerms}</Text>
                    </View>
                </View>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.loginButtonGradientStyle} >
                    <TouchableOpacity style={styles.loginButtonStyle} onPress={() => { this.props.navigation.popToTop() }} >
                        <Text style={styles.loginButtonTitleStyle}> {strings.confirm} </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
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
        Event_Data,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review);
