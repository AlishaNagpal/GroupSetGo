import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import {vh} from '../Constants'


const styles = StyleSheet.create({
    imageOverlay: {
        position: 'absolute',
        left: vh(0),
        right: vh(0),
        bottom: vh(0),
        top: vh(0),
    },
    container: {
        backgroundColor: '#e1e4e8',
    },
});

export default class ProgressiveImage extends React.Component {
    thumbnailAnimated = new Animated.Value(0);
    imageAnimated = new Animated.Value(0);
    
    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
            toValue: 1,
        }).start();
    }

    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
        }).start();
    }
    render() {
        const {
            thumbnailSource,
            source,
            style,
        } = this.props;
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={thumbnailSource}
                    style={style}
                    onLoad={this.handleThumbnailLoad}
                    blurRadius={1}
                />
                <Animated.Image
                    source={source}
                    style={[styles.imageOverlay, style]}
                    onLoad={this.onImageLoad}
                />
            </View>
        );
    }
}