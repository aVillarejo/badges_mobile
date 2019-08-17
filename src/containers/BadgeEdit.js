import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BadgeEdit = () => {
  return (
    <View style={styles.container}>
      <Text>Badge Edit Page</Text>
    </View>
  );
};

export default BadgeEdit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
