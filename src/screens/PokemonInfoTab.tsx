import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Flex} from '../components/FlexContainer';
import Colors from '../themes/colors';

const PokemonInfoTab = () => {
  const info = [
    {
      label: 'Pokemon',
      value: 'Pikachu',
    },
    {
      label: 'Abilities',
      value: 'Static, Lightning-rod',
    },
    {
      label: 'Height',
      value: 4,
    },
    {
      label: 'Weight',
      value: 60,
    },
    {
      label: 'Category',
      value: 'Mouse Pokemon',
    },
  ];

  return (
    <Flex>
      <View style={styles.itemContainer}>
        <Text style={styles.description}>
          {
            'It has small electric sacs on both its cheeks.\nIf threatened, it looses electric charges from\nthe sacs.'
          }
        </Text>

        {info.map(item => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        ))}
        <View style={styles.item}>
          <Text style={styles.title}>{'Type'}</Text>
          <View style={styles.typeContainer}>
            <Text style={styles.type}>Electric</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>{'Weaknesses'}</Text>
          <View style={[styles.typeContainer, {backgroundColor: Colors.brown}]}>
            <Text style={styles.type}>Ground</Text>
          </View>
        </View>
      </View>
    </Flex>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    width: 120,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'gray',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  type: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  typeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.yellow,
  },
  description: {
    fontWeight: '600',
    fontSize: 15,
  },
});

export default PokemonInfoTab;
