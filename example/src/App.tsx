import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import LOG from '@adembacajdev/react-native-logger';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Debug Logger"
        onPress={() =>
          LOG.debug('Clicking', {
            name: 'Adem',
            surname: 'Bacaj',
            type: 'Debug',
          })
        }
      />
      <Button
        title="Info Logger"
        onPress={() =>
          LOG.info('Clicking', { name: 'Adem', surname: 'Bacaj', type: 'Info' })
        }
      />
      <Button
        title="Warning Logger"
        onPress={() =>
          LOG.warn('Clicking', {
            name: 'Adem',
            surname: 'Bacaj',
            type: 'Warning',
          })
        }
      />
      <Button
        title="Error Logger"
        onPress={() =>
          LOG.error('Clicking', {
            name: 'Adem',
            surname: 'Bacaj',
            type: 'Error',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
