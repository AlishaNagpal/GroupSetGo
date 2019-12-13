import { StyleSheet, I18nManager ,Platform} from 'react-native';
export const borderRadius = 4;

let containerStyle = {
  position: 'absolute',
  overflow: 'hidden',
};
export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  input: {
    top: 2,
    padding: 0,
    paddingTop: 0, /* XXX: iOS has paddingTop set for multiline input */
    margin: 0,
    flex: 1,

    textAlign: I18nManager.isRTL?
      'right':
      'left',

    includeFontPadding: false,
    textAlignVertical: 'top',
  },

  helperContainer: {
    minHeight: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  row: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  error: {
    flex: 1,
    marginTop:16,
  },
  stack: {
    flex: 1,
    alignSelf: 'stretch',
  },

  flex: {
    flex: 1,
  },
  borderLeft: {
    ...StyleSheet.absoluteFillObject,
    borderRadius,

    right: -borderRadius,
    bottom: -borderRadius,
  },

  borderRight: {
    ...StyleSheet.absoluteFillObject,
    borderRadius,

    left: -borderRadius,
    bottom: -borderRadius,
  },

  borderBottom: {
    ...StyleSheet.absoluteFillObject,
    borderRadius,

    top: -borderRadius,

    /* XXX: Android positioning error workaround */
    bottom: StyleSheet.hairlineWidth,
  },

  borderTop: {
    ...StyleSheet.absoluteFillObject,
    borderRadius,

    left: -borderRadius,
    right: -borderRadius,
    bottom: -borderRadius,
  },

  leftContainer: {
    ...containerStyle,

    top: 0,
    left: 0,
    width: borderRadius,
    height: borderRadius,
  },

  rightContainer: {
    ...containerStyle,

    top: 0,
    right: 0,
    height: borderRadius,
  },

  bottomContainer: {
    ...containerStyle,

    top: borderRadius - ('android' === Platform.OS? 0.25 : 0),
    left: 0,
    right: 0,
    bottom: 0,
  },

  topContainer: {
    ...containerStyle,

    top: 0,
    height: borderRadius,
  },

  topLineContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
});
