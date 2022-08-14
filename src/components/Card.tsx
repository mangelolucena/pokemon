import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import Colors from '../themes/colors';

const Card: FC<ViewProps> = props => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
});

export default Card;
