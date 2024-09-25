import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Employee from './Employee';

const Company = () => {
  const [name, setName] = useState('');
  const handleButton = () => {
    setName('Pritam');
  };
  const handleReset = () => {
    setName('');
  };

  const emp = [
    {
      id: 1,
      name: 'Nihal',
      city: 'Sangli',
    },
    {
      id: 2,
      name: 'Pritam',
      city: 'Malada',
    },
  ];

  return (
    <View>
      <Text> {name} </Text>
      <View>
        <Button
          title="Show Name"
          onPress={() => handleButton()}
          color={'red'}
        />
      </View>
      <View>
        <Button title="Clear" onPress={handleReset} color={'green'} />
      </View>

      <Employee data={emp} />
    </View>
  );
};

export default Company;
