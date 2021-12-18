import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = (props) => {
  const goToPost = () => {
    props.navigation.navigate('Post'); // перейти на Post
    // props.navigation.push('Post'); // может открыть ту же страницу, обновить стэк
  };

  return (
    <View style={styles.center}>
      <Text>Main Screen</Text>
      <Button title="Go to Post" onPress={goToPost} />
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

// iOS Running app on iPhone (
//   Object {
//     "addListener": [Function addListener],
//     "canGoBack": [Function canGoBack],
//     "dispatch": [Function dispatch],
//     "getParent": [Function getParent],
//     "getState": [Function anonymous],
//     "goBack": [Function anonymous],
//     "isFocused": [Function isFocused],
//*     "navigate": [Function anonymous],
//     "pop": [Function anonymous],
//     "popToTop": [Function anonymous],
//     "push": [Function anonymous],
//     "removeListener": [Function removeListener],
//     "replace": [Function anonymous],
//     "reset": [Function anonymous],
//     "setOptions": [Function setOptions],
//     "setParams": [Function anonymous],
//   }
