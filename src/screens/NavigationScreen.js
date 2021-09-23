import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import IndexScreen from './IndexScreen';
import ShowScreen from './ShowScreen';
import CreateScreen from './CreateScreen';
import { TouchableOpacity, StyleSheet, } from 'react-native';
import {Feather} from '@expo/vector-icons';
import EditScreen from './EditScreen';


const Stack = createStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" 
        component={IndexScreen} 
        options={
        ({navigation})=>({
           headerRight:()=>(
             <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
               <Feather name="plus" size={35} style={styles.plusIcon}/>
               
             </TouchableOpacity>
           )
         })
        }
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: 'Showing Blog' },
        ({navigation,route})=>({
          headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:route.params.id})}>
              <Feather name="edit" size={35} style={styles.plusIcon}/>
              
            </TouchableOpacity>
          )
        })
      }/>
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Creating Blog' }}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Editing Blog' }}/>
              
      
      </Stack.Navigator>
    </NavigationContainer>
    );
  };

  const styles=StyleSheet.create({
      plusIcon:{
          marginRight:20,
      }
  });
export default NavigationScreen;



