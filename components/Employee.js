import React from 'react';
import {Text, View} from 'react-native';

const Employee = ({data}) => {
  return (
    <View>
      {data.map(item => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

export default Employee;
