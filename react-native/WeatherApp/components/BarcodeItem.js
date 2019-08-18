import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BarcodeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}> 제품 번호 : {this.props.barcode} </Text>
        <Text style={styles.itemText}> 검사일 : 2019-09-11 </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
    itemContainer : {
        margin : 5,
        height : 50,
        borderBottomWidth : 1  ,
        borderBottomColor : '#eeeeee',
        alignItems : 'center'
    },
    itemText : {
        fontSize : 12,
        alignItems : 'center',
        justifyContent: 'center',
    }
});