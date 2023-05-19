import React, { useState } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppHeader from '../components/AppHeader';

function QuizApp() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: ' Which Of The Following Is Not An Operating System?',
      options: ['Windows', 'Linux', 'Oracle', 'BIOS'],
      correctAnswer: 'BIOS',
    },
    {
      question: 'When Was The First Operating System Developed',
      options: ['1948', '1949', '1950', '1951'],
      correctAnswer: '1950',
    },
    {
      question: 'Which Of The Following Is Extension Of Notepad?',
      options: ['.txt', '.xls', 'ppt', 'bmp'],
      correctAnswer: '.txt',
    },
    {
      question: 'What Is The Full Form OF FAT',
      options: [
        'File Attribute Table',
        'File Allocation Table',
        'Font Attribute Table',
        'Format Allocation Table',
      ],
      correctAnswer: 'File Allocation Table',
    },
    {
      question: 'BIOS is Used For?',
      options: [
        'By Operating System',
        'By Compiler',
        'By Interpreter',
        'By Application Software',
      ],
      correctAnswer: 'By Application Software',
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
      alert(`You scored ${score + 1} out of ${questions.length}`);
      setQuestionIndex(0);
      setScore(0);
    }
  };

  const currentQuestion = questions[questionIndex];

  return (
    <div style={styles.bgStyles}>
      <View style={styles.droidSafeArea}>
        <Text></Text>
        <View style={styles.headingContainer}>
          <Text style={styles.headingtext}>Quiz App</Text>
        </View>
      </View>

      <h2 style={styles.text}>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleAnswerSelect(option)}
            style={styles.buttonText}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizApp;

const styles = StyleSheet.create({
  bgStyles: {
    backgroundColor: '#78866B',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(40),
  },
  headingContainer: {
    backgroundColor: 'black',
    borderWidth: 9,
    borderRadius: 23,
  },
  headingtext: {
    color: 'white',
    padding: 22,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Rajdhani',
  },
  text: {
    color: 'white',
    padding: 22,
    fontSize: 25,
    fontWeight: 'bold',
    flexDirection: 'row',
    fontFamily: 'Rajdhani',
    marginTop: 90,
  },
  buttonText: {
    color: 'black',
    padding: 22,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Rajdhani',
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 80,
    borderWidth: 4,
    marginBottom: 20,
  },
});
