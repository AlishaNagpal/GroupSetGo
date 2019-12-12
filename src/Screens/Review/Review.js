import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
Icon.loadFont()
Icon1.loadFont()

/**
 * custom imports
 */
import styles from './styles'
import { vh, Colors, vw } from '../../Constants'
import strings from '../../Constants/Strings'

const colors = [Colors.fadedRed, Colors.darkishPink]

export default class Review extends PureComponent {
    state = {
        acceptedTerms: false
    }
    
    renderCostBreakdownList() {
        return costBreakdownData.map((data) => {
            return (
                <View style={styles.listRowStyle}>
                    <Text style={styles.typeCostStyle}>{data.typeOfCost}</Text>
                    <Text style={styles.listAmountStyle}>{data.amount}</Text>
                    <Text style={styles.listPersonCountStyle}>{data.personCount}</Text>
                    <Text style={styles.listTotalAmountStyle}>{data.totalAmount}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.headerView}>
                    <Icon  name="ios-arrow-back" size={vh(30)} color={Colors.white} style={styles.backButtonStyle} />
                    <Text style={styles.reviewHeadingStyle}>Review</Text>
                </TouchableOpacity>

                <View style={styles.containerStyle1}>
                    <Text style={styles.eventNameHeadingStyle}>Unlimited Carnival</Text>
                    <Text numberOfLines={0} style={styles.eventAddressStyle}>200 N Columbus Dr, Chicago, IL 60601, USA</Text>
                    <View style={[styles.eventDateViewStyle, {marginTop: vh(17) }]}>
                        <Text style={{ fontFamily: 'SourceSansPro-Regular', fontSize: vw(13.3), color: Colors.fadedGray2 }}>{strings.eventDate}</Text>
                        <Text style={{ fontFamily: 'SourceSansPro-Regular', fontSize: vw(13.3), color: Colors.fadedGray2, marginRight: vw(38.4) }}>{strings.lastDateToLeave}</Text>
                    </View>
                    <View style={[styles.eventDateViewStyle, {marginTop: vh(10)}]}>
                        <Text style={styles.eventDetailsCommonStyle}>August 10, 2018</Text>
                        <Text style={[styles.leaveDateStyle, {marginRight: vw(88)}]}>July 30, 2018</Text>
                    </View>
                </View>
                <View style={styles.containerStyle2}>
                    <Text style={styles.eventDetailsCommonStyle}>{strings.costBreakdown}</Text>
                    <View style={{ borderColor: Colors.fadedGray2, borderBottomWidth: vw(0.5), borderTopWidth: vw(0.5), marginTop: vh(13.3), paddingBottom: vh(2), paddingTop: vh(13) }}>
                        {this.renderCostBreakdownList()}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: vh(10) }}>
                        <Text style={styles.eventDetailsCommonStyle}>{strings.totalCost}</Text>
                        <Text style={styles.eventDetailsCommonStyle}>$46</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: vh(34.7), height: vh(18) }}>
                        <Icon1 name={this.state.acceptedTerms ? 'checkbox-marked-outline' : 'checkbox-blank-outline'} color={this.state.acceptedTerms ? Colors.fadedRed : Colors.fadedGray2} size={vw(20)} onPress={() => { this.setState({ acceptedTerms: !this.state.acceptedTerms }) }} />
                        <Text style={{ marginTop: vh(-3), fontSize: vh(13.3), color: Colors.fadedGray2, marginLeft: vw(6.7), fontFamily: 'SourceSansPro-Regular' }}>{strings.agreeToTerms}</Text>
                    </View>
                </View>
                <LinearGradient colors={colors} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={styles.loginButtonGradientStyle} >
                <TouchableOpacity style = {styles.loginButtonStyle}  onPress={()=>this.props.navigation.pop(2)} >
                    <Text style={styles.loginButtonTitleStyle}>CONFIRM</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
}

const costBreakdownData = [
    { serialNo: 1, typeOfCost: 'Per Person Cost', amount: '$20', personCount: 'x2', totalAmount: '$40' },
    { serialNo: 2, typeOfCost: 'Payment Gateway Fee', amount: '$2', personCount: 'x2', totalAmount: '$4' },
    { serialNo: 3, typeOfCost: 'GroupSetGo Fee', amount: '$1', personCount: 'x2', totalAmount: '$2' },
]