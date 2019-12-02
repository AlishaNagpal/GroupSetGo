import React from 'react';
import OcticonsI from 'react-native-vector-icons/Octicons'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoI from 'react-native-vector-icons/Entypo'
import AntDesignI from 'react-native-vector-icons/AntDesign'

export const MaterialCommunityIcons = props => (
    <MaterialCommunityIconsI {...props} />
)

const Octicons = props => <OcticonsI {...props} />
const Ionicons = props => <IoniconsI {...props} />
const FontAwesome = props => <FontAwesomeI {...props} />
const MaterialIcons = props => <MaterialIconsI {...props} />
const Entypo = props => <EntypoI {...props} />
const AntDesign = props => <AntDesignI {...props} />

export default  {
    MaterialCommunityIcons,
    FontAwesome,
    Octicons,
    MaterialIcons,
    Ionicons,
    Entypo,
    AntDesign
}