import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Navigation from './navigation/Navigation';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
  );
};

export default App;