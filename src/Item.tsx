import React from 'react';
import { Button, Text } from 'react-native';

interface ItemProps {
  id: number,
  title: string,
  remove: (id: number) => void,
}

export default function Item(props: ItemProps) {

  function removeItem() {
    props.remove(props.id)
  }

  return <Text>
    [ {props.title} / {props.id} ]
    <Button
      title="X"
      onPress={removeItem}
    />
  </Text>;
}
