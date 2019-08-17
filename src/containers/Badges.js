import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Badges = () => {
  return (
    <View style={styles.container}>
      <Text>Badges Page</Text>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
