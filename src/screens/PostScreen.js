import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = (props) => {
  // const postId = props.navigation.navigate('postId');

  return (
    <View style={styles.center}>
      <Text>POST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
