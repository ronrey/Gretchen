import React from 'react';
import {View, 
    Text, 
    Button,
    ImageBackground,
} from 'react-native';


const Stores = props =>{
    return (
        <View>
            <ImageBackground source={require('./images/background.png')} style={{width: '100%', height: '100%'}}>

            <Text>Stores123</Text>
            <Button
      title="Back"
      onPress={() => props.navigation.goBack()}
    />
    </ImageBackground>

        </View>
    )
};

export default Stores;
