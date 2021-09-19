import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Page} from './src/components/Page/Page';

const App = () => {
  const [user, setUser] = useState<string>();
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <Page
        user={user}
        onLogin={() => setUser('bob')}
        onCreateAccount={() => null}
        onLogout={() => setUser(undefined)}
      />
    </SafeAreaView>
  );
};

export default App;
