import React from 'react';
import 'react-native-gesture-handler';
import { RefreshProvider } from './src/hooks/RefreshProvider';
import Navigation from './src/navigations';

export default function App() {
  return <RefreshProvider>
    <Navigation />
  </RefreshProvider>
}