import React, { Component } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../Constants'

export default class FloatingLabel extends Component {
    constructor(props) {
        super(props);
        this.position = new Animated.Value(0);
        this.state = {
            isFieldActive: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if (!this.state.isFieldActive) {
                this.setState({ isFieldActive: true });
                Animated.timing(this.position, {
                    toValue: 1,
                    duration: 600,
                }).start();
            }
        }, 200);
    }

    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        return {
            top: this.position.interpolate({
                inputRange: [0, 1],
                outputRange: [this.props.goFrom, this.props.goTo],
            }),
            fontSize: isFieldActive ? 11.5 : 15,
            color: Colors.fadedGray
        }
    }



    render() {
        return (
            <View style={this.props.style} >
                <TouchableOpacity activeOpacity={1} >
                    <Animated.Text
                        style={[this.props.style, this._returnAnimatedTitleStyles()]}
                    > {this.props.title} </Animated.Text>
                </TouchableOpacity>
            </View>
        );
    }
}
