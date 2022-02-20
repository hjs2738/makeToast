/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import ToastModule from './Toast';

function App() {
  const onPress = () => {
    ToastModule.show('Hello World', 0);
  };

  return (
    <SafeAreaView>
      <Button title="Press me" onPress={onPress} />
    </SafeAreaView>
  );
}

export default App;
