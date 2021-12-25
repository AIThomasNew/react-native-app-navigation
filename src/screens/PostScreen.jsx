import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { THEME } from '../theme';
import { DATA } from '../../data';

export const PostScreen = (props) => {
  const route = props.route;
  const postId = route.params?.postId; // выводить пост по id
  const post = DATA.find((post) => post.id === postId);
  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
      {
        text: 'Отменить',
        style: 'cancel',
      },
      { text: 'Удалить', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <Button
        title="Удалить"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
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
