import React, { useState } from 'react';
import {StyleSheet,Platform,View} from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import AppHeader from '../components/AppHeader'

function QuizApp() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: ' Which component of a computer connects the processor to the other hardware?',
      options: ['System BUS','CPU','Memory','Input Unit'],
      correctAnswer: 'Input Unit',
    },
    {
      question:'Flash memory is a type of ______memory.',
      options: ['Primary','Secondary','RAM','All Of These'],
      correctAnswer: 'Primary',
    },
    {
      question: 'Python uses a ______ to convert source code to object code.',
      options: ['Interpretor','Compiler','combination of interpreter and compiler','special virtual engine'],
      correctAnswer: 'Compiler',
    },
     {
      question: 'Which of the following is not a python IDE? ',
      options: ['IDLE','SPYDER','JUPITER NOTES','Sublime Text'],
      correctAnswer: 'Sublime Text',
    },
    {
      question: 'Python programs are typed in',
      options:['Interactive Mode','Script Mode','Combination Of Script And Interactive','All Of These'],
      correctAnswer:'All Of These'
    },
  ];

  const handleAnswerSelect = (selectedAnswer) => {
    if (selectedAnswer === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // End of quiz
      alert(`You scored ${score+1} out of ${questions.length}`);
      setQuestionIndex(0);
      setScore(0);
    }
  };

  const currentQuestion = questions[questionIndex];

  return (
    <div style={styles.bgStyles}>
<View style={styles.droidSafeArea}>
    <View style={styles.headingContainer}>
      <h1 style={styles.headingtext}>Quiz App</h1>
      </View>
      </View>
      
      <h2 style={styles.text}>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerSelect(option)} style={styles.buttonText}>
            {option}
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default QuizApp;

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
   text:{
    color:'white',
    padding: 22,
    fontSize: 25,
    fontWeight: 'bold',
    flexDirection:"row",
    fontFamily:'Rajdhani',
    marginTop:90,
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
})
  


