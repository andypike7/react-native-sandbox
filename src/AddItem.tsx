import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

interface Props {
  onAdd: (name: string) => void,
}

export default function AddItem(props: Props) {
  const pressHandler = () => {
    props.onAdd('[!!!]');
  };

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo..."
      />
      <Button
        title="Add"
        onPress={pressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  input: {
    width: '80%',
  },
});