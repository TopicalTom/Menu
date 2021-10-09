/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
 
const AppClip: React.FC = () => {
    return (
        <View style={styles.clipStyle}>
            <Text 
                style={styles.textStyle}>
                Menu App Clip
            </Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    clipStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BFEFFF'
    },
    textStyle: {
        fontSize: 26,
        color: '#204080'
    },
});
 
export default AppClip;