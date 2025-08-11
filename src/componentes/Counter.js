import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Contador:</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="Sumar" onPress={() => setCount(count + 1)} />
        <Button title="Restar" onPress={() => setCount(count - 1)} />
        <Button title="Reiniciar" onPress={() => setCount(0)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: '#E9F7EF',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Counter;