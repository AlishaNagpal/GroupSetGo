import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { vh, VectorIcons, Colors } from '../../Constants'
import styles from './styles'

export default class Stars extends Component {
    state = { first: false, second: false, third: false, fourth: false, fifth: false }

    componentDidMount() {
        this.check()
    }

    check = () => {
        if (this.state.first === false && this.state.second === false && this.state.third === false && this.state.fourth === false && this.state.fifth === false) {
            return (
                this.props.starRatings && this.props.starRatings(false)
            )
        } else {
            return (
                this.props.starRatings && this.props.starRatings(true)
            )
        }
    }

    starSelection = (stars) => {
        switch (stars) {
            case 1:
                this.setState({
                    first: !this.state.first,
                    second: false,
                    third: false,
                    fourth: false,
                    fifth: false
                })
                setTimeout(() => {
                    this.check()
                }, 200)

                break;
            case 2:
                this.setState({
                    first: true,
                    second: true,
                    third: false,
                    fourth: false,
                    fifth: false
                })
                setTimeout(() => {
                    this.check()
                }, 200)
                break;
            case 3:
                this.setState({
                    first: true,
                    second: true,
                    third: true,
                    fourth: false,
                    fifth: false
                })
                setTimeout(() => {
                    this.check()
                }, 200)
                break;
            case 4:
                this.setState({
                    first: true,
                    second: true,
                    third: true,
                    fourth: true,
                    fifth: false
                })
                setTimeout(() => {
                    this.check()
                }, 200)
                break;
            case 5:
                this.setState({
                    first: true,
                    second: true,
                    third: true,
                    fourth: true,
                    fifth: true
                })
                setTimeout(() => {
                    this.check()
                }, 200)
                break;

        }
    }

    render() {
        return (
            <View style={styles.starView} >
                <TouchableOpacity onPress={() => this.starSelection(1)} style={styles.moveRight} activeOpacity={1} >
                    <VectorIcons.Ionicons name={this.state.first ? 'ios-star' : 'ios-star-outline'} size={vh(35)} color={this.state.first ? Colors.starSelected : Colors.stars} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.starSelection(2)} style={styles.moveRight} activeOpacity={1} >
                    <VectorIcons.Ionicons name={this.state.second ? 'ios-star' : 'ios-star-outline'} size={vh(35)} color={this.state.second ? Colors.starSelected : Colors.stars} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.starSelection(3)} style={styles.moveRight} activeOpacity={1} >
                    <VectorIcons.Ionicons name={this.state.third ? 'ios-star' : 'ios-star-outline'} size={vh(35)} color={this.state.third ? Colors.starSelected : Colors.stars} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.starSelection(4)} style={styles.moveRight} activeOpacity={1} >
                    <VectorIcons.Ionicons name={this.state.fourth ? 'ios-star' : 'ios-star-outline'} size={vh(35)} color={this.state.fourth ? Colors.starSelected : Colors.stars} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.starSelection(5)} activeOpacity={1} >
                    <VectorIcons.Ionicons name={this.state.fifth ? 'ios-star' : 'ios-star-outline'} size={vh(35)} color={this.state.fifth ? Colors.starSelected : Colors.stars} />
                </TouchableOpacity>
            </View>
        );
    }
}
