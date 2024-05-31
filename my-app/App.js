import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Devs</Text>
      <Text style={{ fontSize: 12, fontWeight: 500, lineHeight:14.4}}>14 tasks today</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
    backgroundColor: '#F7F0E8',
  },
  text: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 38.4,
  }
});
