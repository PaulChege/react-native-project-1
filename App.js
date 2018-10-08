import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {vibrate} from './utils'


export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
       remaining_time: 10,
       total_time: 10
    }
  }

  startTimer = () => {
    this.setState({remaining_time: Number(this.state.total_time)})
    setInterval(() => {
      current = this.state.remaining_time
      if (current > 0)
      {
        this.setState({remaining_time: current - 1})
      }
      else if(current == 0){
        vibrate()
      }
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.text}>Count Down</Text>
        <TextInput
          style = {styles.text}
          onChangeText={(text) => this.setState({total_time: text})}
          value = {String(this.state.total_time)}
        />
        <Button
          title = "Start"
          onPress = {this.startTimer}
        />
        <Text style= {styles.text}>
          {this.state.remaining_time}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
});
