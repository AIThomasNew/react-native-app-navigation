import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { THEME } from '../theme';
import { DATA } from '../../data';

export const PostScreen = (props) => {
  let route = props.route;
  let postId = route.params?.postId; // выводить пост по id
  // const text = route.params?.text;

  const post = DATA.find((post) => post.id === postId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <Button title="Удалить" color={THEME.DANGER_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
});
