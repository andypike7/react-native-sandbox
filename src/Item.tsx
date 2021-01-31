import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

interface ItemProps {
  id: number,
  title: string,
  state?: false | true, // false, true
  remove: (id: number) => void,
  done: (id: number) => void,
}

export default function Item(props: ItemProps) {
  return (
    <View style={styles.line}>
      <Text>[ {props.id} ]</Text>
      <Text>[ {props.title} ]</Text>
      <Text>[ {props.state === true ? 'Done' : 'Waiting'} ]</Text>
      <Button
        title="V"
        onPress={() => props.done(props.id)}
      />
      <Button
        title="X"
        onPress={() => props.remove(props.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
