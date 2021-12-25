import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native'; // в завис. от платф. изм. стили
import { MainScreen } from './src/screens/MainScreen';
import { PostScreen } from './src/screens/PostScreen';
import { THEME } from './src/theme';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        // стили по умолчанию
        screenOptions={{
          headerStyle: {
            // если android - theme.main_color, иначе белый
            backgroundColor:
              Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
          },
          headerTintColor:
            Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Мой блог' }}
        />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{ title: 'Посты' }}
          // getId={({ params }) => params.postId}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

////////////////

// screenOptions={{ headerShown: true }} - не видимый header 

////////////////

// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import AppNavigation from './src/navigation/AppNavigation';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Eeee</Text> */}
//       <AppNavigation />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from 'react';
// import AppNavigation from './src/navigation/AppNavigation';
// import { StyleSheet, Text, View } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import { bootstrap } from './src/bootstrap';

// export default function App() {
//   const [isReady, setIsReady] = useState(false);

//   if (!isReady) {
//     return (
//       <AppLoading
//         // пропсы
//         startAsync={bootstrap}
//         onFinish={() => setIsReady(true)}
//         onError={(err) => console.log(err)}
//       />
//     );
//   }

//   return <AppNavigation />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
