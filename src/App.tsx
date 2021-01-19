import React from 'react';
// import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
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

/*
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
  return (
    <View style={{flex: 1, paddingTop:20}}>
      <Text style={styles.header}>Mock App</Text>
      <FlatList
        data={this.state.dataSource}
        renderItem={
          ({item}) =>
            <View style={styles.card}>
              <Text style={styles.id}>
                {item.id}
              </Text>
              <Text style={styles.title}>
                {item.title}
              </Text>
              <Image source ={{uri: item.url }} style={styles.image} />
          </View>
        }
        keyExtractor={({id}, index) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderColor: '#ff7a00',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#f3ea68',
    flex: 1,
  },
  header: {
    fontSize: 40,
    padding: 10,
  },
  image: {
    height: 60,
    width: 60,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  id: {
    fontSize: 30,
  }
});
*/