import * as React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style={styles.textContainer}>
      <Text style={styles.text}>My Quiz App</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  textContainer:{
    backgroundColor: ''
  },
  text:{
    color:'',
    padding: 22,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  } 
  
})