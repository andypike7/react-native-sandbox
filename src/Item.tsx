import React from 'react';
import { Text } from 'react-native';

interface Item {
  title: string,
  key: string,
}

export default function Item(props: any) {
  return <Text key={props.key}>{props.title} / {props.key}</Text>;
}
