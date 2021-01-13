import React from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native';

// import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.mp3'),
  require('./assets/two.mp3'),
  require('./assets/three.mp3'),
  require('./assets/four.mp3'),
  require('./assets/five.mp3'),
  require('./assets/six.mp3'),
  require('./assets/seven.mp3'),
  require('./assets/eight.mp3'),
  require('./assets/nine.mp3'),
  require('./assets/ten.mp3')
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <Image style={styles.logo} source={require('./assets/germany.png')} />
      <Text style={styles.heading}>Numbers</Text>
      <Text style={styles.subheading}>(Die Zahlen)</Text>
      <View style={styles.gridContainer}>
        {soundList.map((sound, index) => (
            <TouchableOpacity 
              key={sound}
              style={styles.box}
              >
              <Text style={styles.text}>{index+1}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#27373f"
  },
  logo: {
    alignSelf: "center",
    width:170,
    height:85,
    marginTop:10
  },
  heading: {
    fontSize:35,
    color:"#8ec9f0",
    alignSelf: "center",
    marginTop:10
  },
  subheading: {
    fontSize:20,
    color:"#bbdff6",
    alignSelf: "center",
    marginBottom:10
  },
  gridContainer:{
    flex:1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  box: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginVertical: 6,
    backgroundColor: "#125887",
    borderRadius: 5
  },
  text: {
    fontSize: 40,
    color: "#ff4301"
  }
})