import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Flex: FC<ViewProps> = props => (
  <View style={[styles.flex, props.style]}>{props.children}</View>
);

const Center: FC<ViewProps> = props => (
  <View style={[styles.center, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {Flex, Center};
