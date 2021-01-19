import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

interface NavBarProps {
  color?: string,
  notAColor?: string,
};

export default function NavBar(props: NavBarProps) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>NavBar 1 {props.color}</Text>
      <Text style={styles.text}>NavBar 2 {typeof props.notAColor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'silver',
    height: 70,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    backgroundColor: 'gray',
    color: 'white',
  },
});