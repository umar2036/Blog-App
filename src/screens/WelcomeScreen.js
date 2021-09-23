import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity, TouchableOpacityBase} from 'react-native';

const WelcomeScreen = (props) =>
{ 
    //console.log(props.navigation);
    return(
        <View>
        <Text style={styles.textStyle} > This is the Welcome Sreen </Text>
        <Button 
            onPress={()=> props.navigation.navigate('Component')}
            title="Go to Component"
        />
        <Button 
            onPress={()=> props.navigation.navigate('Home')}
            title="Go to Home"
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
            <Text> Go to List</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
        
    }
});

export default WelcomeScreen;