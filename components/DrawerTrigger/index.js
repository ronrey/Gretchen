import React from 'react';
import {TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useGlobal} from 'reactn'
const DrawerTrigger = ()=>{
    const [drawerOpen, setDrawerOpen] = useGlobal('drawerOpen');
  
    const onPress=()=>{
      setDrawerOpen(!drawerOpen);
    }
    return (<TouchableOpacity onPress={onPress}>
    <Ionicons
       name="ios-menu"
       size={32}
       color="white"
       left={20}
     />
  </TouchableOpacity>);
  };

  export default DrawerTrigger;