import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PostScreen = (props) => {
  let navigation = props.navigation;
  let route = props.route;
  let postId = route.params?.postId; // выводить пост по id

  // const text = route.params?.text;

  // navigate('Movie', { title: item.title, img: item.img, id: item.imdbID })

  return (
    <View style={styles.center}>
      <Text>{postId}</Text>
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
