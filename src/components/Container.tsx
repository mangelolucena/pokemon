import React, {FC} from 'react';
import {StyleSheet, ViewProps} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

const Container: FC<ViewProps> = props => (
  <SafeAreaView style={[styles.container, props.style]}>
    {props.children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
