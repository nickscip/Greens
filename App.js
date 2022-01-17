import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SMART APP</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title = "Find Art" />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 55,
  },
  text: {
    fontSize: 50
  },
  buttonContainer: {
    margin: 30,
    alignItems: 'flex-start'
  }
});
