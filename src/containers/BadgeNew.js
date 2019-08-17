import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BadgeNew = () => {
  return (
    <View style={styles.container}>
      <Text>Badge New Page</Text>
    </View>
  );
};

export default BadgeNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
