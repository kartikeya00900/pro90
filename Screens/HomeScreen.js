import *as React from 'react'
import {View,Text,StyleSheet,Button,ScrollView,Image,TouchableOpacity,SafeAreaView,Platform,StatusBar} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import AppHeader from '../components/AppHeader'

let customFonts = {
  "Rajdhani": require("../Fonts/Rajdhani-Regular.ttf")
};




export default class HomeScreen extends React.Component{
  render(){
    return(
      
     <View style={styles.bgStyles} >
     
     <SafeAreaView style={styles.droidSafeArea}/>
     
     <View style={styles.headingContainer}>
     <Text style={styles.headingtext}> KVJ CLASS 11 QUIZ APP  
     
     </Text>
     </View>
    
     <View>
     <Text style={styles.subHeadingText}>CLASS 11 Computer Science & Informative Practices Quiz </Text>
     <Image source={require("../Images/kendriyavidyalayajakhoohillsshimla.jpg")} style={styles.imageStyles} >
     
     </Image>


    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CS')}>
     <Text style={styles.buttonText}>Computer Science</Text> 
   
     </TouchableOpacity>
    

       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Question2')}>
     <Text style={styles.buttonText}>Informatics Practices</Text>
  
     </TouchableOpacity>

      <TouchableOpacity href="https://www.instagram.com/arts_snappy.__/">
     <Text style={styles.infoStyles}>Help ?</Text>
     </TouchableOpacity>

       
     
       
     </View>
 
     </View>
    )
  }
}
const styles=StyleSheet.create({

   bgStyles:{
  backgroundColor:"#78866B",
   },
droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(40)
  },
  headingContainer:{
    backgroundColor: 'black',
    borderWidth:9,
    borderRadius:23
  },
  headingtext:{
    color:'white',
    padding: 22,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:"Rajdhani"
  } ,

  subHeadingText:{
 color:"white",
 padding:22,
 fontSize:30,
 fontWeight:'bold',
 textAlign:'center',
 fontFamily:"Rajdhani"
  },
  imageStyles:{
    width:500,
  height:200,
  alignSelf:'center',
  marginBottom:20,
  marginTop:20,
  borderWidth:3,
  borderRadius:10,
  backgroundColor:"yellow"
  },
  buttonText:{
    color:"black",
    padding:22,
    fontSize:25,
    fontWeight:'bold',
    fontFamily:"Rajdhani",
    borderColor:'black',
    backgroundColor:"white",
    borderRadius:80,
    borderWidth:4,
    marginBottom:20
  },
  infoStyles:{
    color:'white',
    padding:12,
    fontSize:15,
    fontWeight:'bold',
    fontFAMILY:"Rajdhani"

  }
})
