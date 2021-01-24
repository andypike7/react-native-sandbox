import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

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
