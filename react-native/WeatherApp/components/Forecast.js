import React, { Component } from 'react';
import { StyleSheet ,View, Text } from 'react-native';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigText}>
            {this.props.main}
        </Text>
        <Text style={styles.mainText}>
            Current conditions : {this.props.description}
        </Text>
        <Text style={styles.bigText}>
            {this.props.temp} 화씨
        </Text>
        <Text> Forecast </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    container : { height : 130 },
    bigText :{
        flex : 2,
        fontSize : 20,
        textAlign : "center",
        margin : 10,
        color : "#ffffff"
    },
    mainText : {
        flex : 1,
        fontSize : 16, 
        textAlign : "center",
        color : "#ffffff",
    }

});

export default Forecast;