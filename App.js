import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='#000' />
      <Routes />
    </>
  );
}
