import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import AppNavigation from './src/components/config/navigation'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hellow World</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
