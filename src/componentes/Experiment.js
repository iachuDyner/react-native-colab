import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function ExperimentComponent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Contador experimental: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
}