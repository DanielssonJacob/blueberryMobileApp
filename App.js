import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './components/header/HeaderComponent';
import SearchComponent from './components/searchfield/SearchComponent';


export default function App() {
  return (
    <View >
      <HeaderComponent></HeaderComponent>
      <SearchComponent></SearchComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
