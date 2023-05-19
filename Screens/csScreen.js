import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Button,Image,Platform,SafeAreaView} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'


export default class HomeScreen extends React.Component{
  render(){
    return(
      
      <View style={styles.bgStyles}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.headingContainer}>
      <Text style={styles.headingtext}>Computer Science</Text>
      </View>

<View>
<Text style={styles.subHeadingText}>Computer science is a field that involves the study of computers and computing technologies, including software, hardware, algorithms, and data. Here are some important points to consider about computer science:



  </Text>
</View>

<TouchableOpacity onPress={()=>this.props.navigation.navigate("Question")}>
<Text style={styles.buttonText}>CLICK ME TO PROCEED</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>this.props.navigation.navigate("Help")}>
<Text style={styles.infoStyles}> Help Center</Text>
</TouchableOpacity>

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
 fontSize:25,
 fontWeight:'bold',
 textAlign:'center',
 fontFamily:"Rajdhani"
  },

  buttonText:{
    color:"black",
    padding:20,
    fontSize:22,
    fontWeight:'bold',
    fontFamily:"Rajdhani",
    borderColor:'black',
    backgroundColor:"white",
    borderRadius:10,
    borderWidth:5,
    marginBottom:20
  },
  infoStyles:{
    color:'white',
    padding:12,
    fontSize:15,
    fontWeight:'bold',
    fontFAMILY:"Rajdhani"

  }

  }
  )