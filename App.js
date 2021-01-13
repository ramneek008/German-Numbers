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
      <View>
        {soundList.map((sound) => (
            <TouchableOpacity>
              <Text>Press</Text>
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
    backgroundColor: "#3d0099"
  },
  logo: {
    alignSelf: "center",
    width:140,
    height:70,
    marginTop:10
  }
})