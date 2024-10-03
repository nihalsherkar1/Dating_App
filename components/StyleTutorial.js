import React, {Component} from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

export class StyleTutorial extends Component {
  render() {
    return (
      <View>
        <Text style={tw`bg-red-900 text-white  p-5 `}>
          Styles using StyleSheet
        </Text>
        <Text> Styles using StyleSheet </Text>

        <Text style={{color: 'red', fontSize: 30}}> Inline CSS </Text>
      </View>
    );
  }
}

export default StyleTutorial;
