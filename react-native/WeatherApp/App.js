/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Forecast from './components/Forecast'
import OpenWearherMap from './util/OpenWearherMap'
import Camera from './components/Camera';
import BarcodeItem from './components/BarcodeItem';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      barcodes:[],
      zip : '',
      forecast : {}
    }
  }

  setMainState(data){
    this.setState({barcodes : data});
  }

  _handleTextChange (text) {
    console.log(text);

    OpenWearherMap.fetchForecast(text).then(forecast =>{
      this.setState({forecast:forecast});
    })
  }

  _testClick (){
    let tempForecast = {
      main : '서울',
      description : '강남구',
      temp : '30'
    }
    this.setState( { forecast : tempForecast })
  }

  render(){
    let forecastCtrl = null;
    if(this.state.forecast != null){
      forecastCtrl = (
        <Forecast 
            main={this.state.forecast.main}
            description={this.state.forecast.description}
            temp={this.state.forecast.temp}/>
      )
    }
    
    console.log('app.js ->', this.state.barcodes)
    let barcodeCtrl = [];
    let barcodeCommant = (<Text style={styles.barcodeCommant}>바코드를 인식중입니다.......</Text>);
    if(this.state.barcodes.length != 0){
      this.state.barcodes.map ( (value , i )=>{
          barcodeCtrl.push(<BarcodeItem barcode={value}/>)
      })
      barcodeCommant = (<Text style={styles.barcodeCommant}>바코드를 읽었습니다.</Text>);
    }

    return (

      <View style={styles.container}>
        <Camera style={styles.camera} 
            setMainState={this.setMainState.bind(this)}></Camera> 
        <View style={styles.itemBox}>
          <View>
            {barcodeCommant}
          </View>
          <ScrollView>
            {barcodeCtrl}
          </ScrollView>
        </View>
        
{/*         
        <ImageBackground 
            source={require('./image/back.jpeg')}
            resizeMode = 'cover'
            style={styles.backdrop}>

          <View style={styles.overlay}>
            <View style={styles.row}>
              <View style={styles.weatherContainer}>

                <Text>날씨 앱 테스트</Text>
                <Text style={styles.welcome}>{this.state.zip}</Text>
                {forecastCtrl}
                <TextInput 
                        style={styles.input}
                        onSubmitEditing={(event) => this._handleTextChange(event.nativeEvent.text)}/>
                <Button
                    title='Test Button'
                    onPress={this._testClick.bind(this)}/>


              </View>

            </View>
          </View>
        </ImageBackground> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  barcodeCommant :{
    textAlign: 'center'
  },
  camera : {
    height : 150,
    margin : 15,
  },
  itemBox : {
    flex : 2,
    backgroundColor : '#ffffff'
  },
  weatherContainer : {
  },
  overlay : {
    paddingTop : 5,
    opacity : 0.5,
    flexDirection : 'column',
    alignItems : "center"
  },
  backdrop :{
    flex : 1,
    flexDirection : 'column'
  },
  row :{
    flexDirection : 'row',
    flexWrap : 'nowrap',
    alignItems : 'flex-start',
    padding : 30 
  },
  container :{
    flex : 1,
    alignItems : "stretch",// 컨텐츠 가로 중앙정렬
  },
  welcome : {
    fontSize : 20,
    textAlign : "center",
    margin : 10
  },
  input :{
    fontSize : 20,
    borderWidth : 2,
    padding : 2,
    height : 40,
    color : '#ffffff',
    alignItems : 'stretch',
    textAlign : "center"
  }
});

export default App;
