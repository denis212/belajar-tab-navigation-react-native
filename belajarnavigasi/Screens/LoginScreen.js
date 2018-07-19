import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class LoginScreen extends Component {

  static navigateOptions={
    header:null
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Go to Home Screen" onPress={()=>this.props.navigation.navigate('Home')} />
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
