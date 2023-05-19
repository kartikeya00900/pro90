import * as React from 'react';
import {View} from 'react-native'
import CS from './Screens/csScreen'
import HomeScreen from './Screens/HomeScreen'
import Question2 from './Screens/Question2'
import Question from './Screens/Questions'


import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default function App(){
return(
  <View>
  <AppContainer/>
  </View>

)
}
  var AppNavigator=createSwitchNavigator({
       
      
       
       HomeScreen:HomeScreen,
        CS:CS,
       Question2:Question2,
       Question:Question,
       
       
       
     
     
  })
  const AppContainer =createAppContainer(AppNavigator)