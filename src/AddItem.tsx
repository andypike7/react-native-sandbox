import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function AddItem(props) {
  return (
    <View style={ styles.view }>
      <TextInput
        style={ styles.input }
        placeholder="Enter Todo..."
      />
      <Button
        title="Add"
        onPress={ () => alert('!!!') }
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