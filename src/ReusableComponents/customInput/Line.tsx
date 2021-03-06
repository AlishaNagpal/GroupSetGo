import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Animated ,StyleSheet,Platform} from 'react-native';


const lineTypes = PropTypes
  .oneOf(['solid', 'dotted', 'dashed', 'none']);

export default class Line extends PureComponent {
  static defaultProps = {
    lineType: 'solid',
    disabledLineType: 'dotted',

    disabled: false,
    restricted: false,
  };

  static propTypes = {
    lineType: lineTypes,
    disabledLineType: lineTypes,

    disabled: PropTypes.bool,
    restricted: PropTypes.bool,

    tintColor: PropTypes.string,
    baseColor: PropTypes.string,
    errorColor: PropTypes.string,

    lineWidth: PropTypes.number,
    activeLineWidth: PropTypes.number,
    disabledLineWidth: PropTypes.number,

    focusAnimation: PropTypes.instanceOf(Animated.Value),
  };

  static getDerivedStateFromProps(props, state) {
    let { lineWidth, activeLineWidth, disabledLineWidth } = props;

    let maxLineWidth = Math.max(
      lineWidth,
      activeLineWidth,
      disabledLineWidth,
      1,
    );

    if (maxLineWidth !== state.maxLineWidth) {
      return { maxLineWidth };
    }

    return null;
  }

  state = { maxLineWidth: 1 };

  borderProps() {
    let {
      disabled,
      restricted,
      lineWidth,
      activeLineWidth,
      disabledLineWidth,
      baseColor,
      tintColor,
      errorColor,
      focusAnimation,
    } = this.props;

    if (disabled) {
      return {
        borderColor: baseColor,
        borderWidth: disabledLineWidth,
      };
    }

    if (restricted) {
      return {
        borderColor: errorColor,
        borderWidth: activeLineWidth,
      };
    }

    return {
      borderColor: focusAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [errorColor, baseColor, tintColor],
      }),

      borderWidth: focusAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [activeLineWidth, lineWidth, activeLineWidth],
      }),
    };
  }

  render() {
    let { maxLineWidth } = this.state;
    let { disabled, lineType, disabledLineType } = this.props;

    let borderStyle = disabled?
      disabledLineType:
      lineType;

    if ('none' === borderStyle) {
      return null;
    }

    let [top, right, left] = Array
      .from(new Array(3), () => -1.5 * maxLineWidth);

    let lineStyle = {
      ...this.borderProps(),

      borderStyle,
      top,
      right,
      left,
    };

    return (
      <View style={{
        ...StyleSheet.absoluteFillObject, overflow: 'hidden',
      }} pointerEvents='none'>
      <Animated.View style={[{position: 'absolute', bottom: 0,
      ...Platform.select({
      android: { borderRadius: Number.EPSILON },
    }),
  }, lineStyle]} />
      </View>
    );
  }
}
