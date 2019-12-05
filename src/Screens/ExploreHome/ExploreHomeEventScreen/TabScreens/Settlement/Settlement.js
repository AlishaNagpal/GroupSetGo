import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

/**
 * custom imports
 */
import styles from './styles'
import strings from '../../../../../Constants/Strings'
import { vh, vw, DesignWidth, Colors } from '../../../../../Constants'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Settlement extends Component {

    renderPriceDetailsList() {
        return priceDetailsData.map((data) => {
            return (
                <View style={styles.listRowStyle}>
                    <Image
                        source={data.iconUri}
                        style={styles.listIconStyle}
                    />
                    <Text style={styles.titleStyle}>{data.title}</Text>
                    <Text style={styles.amountStyle}>{data.amount}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.priceDetailsHeadingStyle}>{strings.priceDetails}</Text>
                <View style={styles.budgetViewStyle}>
                    <Text style={styles.totalBudgetHeadingStyle}>{strings.totalBudget}</Text>
                    <Text style={styles.amountTextStyle}>$1000</Text>
                </View>
                <View style={styles.priceDetailsViewStyle}>
                    {this.renderPriceDetailsList()}
                    <View style={{ paddingTop: vh(19.3), paddingHorizontal: vw(13.3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(DesignWidth) }}>
                        <Text style={{ fontSize: vw(15.3), fontFamily: 'SourceSansPro-Semibold', color: Colors.darkGray, textAlign: 'left' }}>{strings.finalBudget}</Text>
                        <Text style={{ fontSize: vw(15.3), fontFamily: 'SourceSansPro-Semibold', color: Colors.darkGray, textAlign: 'right' }}>$800</Text>
                    </View>
                    <View style={{ paddingTop: vh(19.3), paddingHorizontal: vw(13.3), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: vw(DesignWidth) }}>
                        <Text style={{ fontSize: vw(15.3), fontFamily: 'SourceSansPro-Semibold', color: Colors.darkGray, textAlign: 'left' }}>{strings.amountRefunded}</Text>
                        <Text style={{ fontSize: vw(15.3), fontFamily: 'SourceSansPro-Semibold', color: Colors.darkGray, textAlign: 'right' }}>$200</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: vh(60) }}>
                    <TouchableOpacity style={{ width: vw(DesignWidth / 2),alignItems: 'center' }}>
                        <Text style = {{marginVertical: vh(22),color: Colors.fadedRed, fontFamily: 'SourceSansPro-Semibold', fontSize: vw(16.7)}}>{strings.raiseIncedent}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Review')}} style={{ width: vw(DesignWidth / 2), alignItems: 'center', backgroundColor: Colors.fadedRed }}>
                        <Text style = {{marginVertical: vh(22), color: Colors.white, fontFamily: 'SourceSansPro-Semibold', fontSize: vw(16.7)}}>{strings.rateReview}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const priceDetailsData = [
    { serialNumber: 1, iconUri: require('../../../../../Assets/Images/icTable.png'), title: 'Table', amount: '$100' },
    { serialNumber: 2, iconUri: require('../../../../../Assets/Images/icFood.png'), title: 'Food', amount: '$550' },
    { serialNumber: 3, iconUri: require('../../../../../Assets/Images/icDrinks.png'), title: 'Drinks', amount: '$100' },
    { serialNumber: 4, iconUri: require('../../../../../Assets/Images/icMiscellaneous.png'), title: 'Miscellaneous', amount: '$50' },
]