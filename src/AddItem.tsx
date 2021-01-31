import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

interface Props {
  onAdd: (name: string) => void,
}

export default function AddItem(props: Props) {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim() !== '') {
      props.onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Enter Todo..."
        onSubmitEditing={pressHandler}
      />
      <Button
        title="Add"
        disabled={value.trim() === ''}
        onPress={pressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxHeight: 35,
    padding: '10px 0',
  },
  input: {
    width: 'calc(100% - 75px)',
  },
});
