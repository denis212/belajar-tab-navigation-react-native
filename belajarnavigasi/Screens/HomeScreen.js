import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Go to Login Screen" onPress={()=>this.props.navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
