import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { DATA } from '../../data';
import { Post } from '../components/Post';

export const MainScreen = (props) => {
  const openPostHandler = (post) => {
    props.navigation.navigate('Post', { postId: post.id });
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
  },
});
