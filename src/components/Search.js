import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { wsize, hsize } from '../entities/constants';
import { AntDesign } from '@expo/vector-icons';

export default function Search({ style, iconStyle, textStyle, ...props }) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.searchContainer}>
      <AntDesign
        name="search1"
        size={wsize(13)}
        color="black"
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="search"
        onChangeText={(text) => setSearch(text)}
        style={styles.searchInput}
        maxLength={30}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    borderColor: '#ececec',
    backgroundColor: '#efefef',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: wsize(349),
    height: hsize(46),
    flexDirection: 'row',
    marginBottom: hsize(14),
    paddingStart: wsize(11),
  },
  searchIcon: {
    alignSelf: 'center',
    marginRight: wsize(10),
  },
  searchInput: {
    fontSize: 15,
  },
});
