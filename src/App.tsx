import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { StyleSheet, Text, View, /*FlatList,*/ Image } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import axios from 'axios';
import NavBar from './NavBar';
import AddItem from './AddItem';
import Item from './Item';

interface Todo {
  id: number,
  title: string,
  state?: false | true, // false, true
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(
    [
      { id: 11, title: '2011' },
      { id: 22, title: '2022' },
      { id: 33, title: '2033' },
    ]
  );

  const addTodo = (title: string) => {
    setTodos((state: Todo[]) => {
      return [
        ...state,
        {
          id: Date.now(),
          title,
        },
      ];
    });
  };

  function findById(state: Todo[], id: number): number {
    return state.findIndex((todo: Todo) => todo.id === id);
  }

  const doneTodo = (id: number) => {
    setTodos((state: Todo[]) => {
      let todoIndex = findById(state, id);

      let newState = [...state];
      newState[todoIndex].state = true;

      return newState;
    });
  };

  const removeTodo = (id: number) => {
    setTodos((state: Todo[]) => {
      let todoIndex = findById(state, id);

      let newState = state.concat();
      newState.splice(todoIndex, 1);

      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <NavBar color="yellow" />
      <AddItem onAdd={addTodo} />
      <View>{
          todos.map((todo: Todo) => {
            return (
              <Item
                id={todo.id}
                title={todo.title}
                key={todo.id.toString()}
                state={todo.state}
                done={doneTodo}
                remove={removeTodo}
              />
            );
          })
      }</View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
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