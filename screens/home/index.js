import React from 'react';
import {View, 
    Text, 
    Button,
    ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import DrawerTrigger from '../../components/DrawerTrigger';

const Home = props =>{
    return (
        <View>
            <ImageBackground source={require('./images/background.png')} style={{width: '100%', height: '100%'}}>

            <Text>HOME123</Text>
            <Button
      title="Stores"
      onPress={() => props.navigation.navigate('Stores')}
    />
    </ImageBackground>

        </View>
    )
};

Home.navigationOptions = screenProps => {
    return (
    {
      title: 'Stores',
      headerTitleStyle: {
        textAlign: 'left',
        fontSize: 24,
      },
      headerTintColor: 'rgba(255,255,255,0.8)',
      headerBackground: (
        <LinearGradient
          colors={['#4caf50', '#a5d6a7']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        />
      ),
      headerRightContainerStyle: {
        paddingRight: 10,
      },
      headerRight: (<DrawerTrigger/>)
    }
  )};

export default Home;
