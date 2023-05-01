import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  function getEmployees() {
    let host = 'http://localhost:8000/api/';
    let endpoint = 'bycicle';
    let url = host + endpoint;

    fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setEmps(result)
    });
  }
  useEffect( () => {
    getBycicle();
  }, []);

  return (
    <View style={styles.container}>
      <Text>gepida</Text>
      <FlatList 
      data={emps}
      renderItem={ ({item}) => (
        <Text>{item.name}</Text>
      )}
      />
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
