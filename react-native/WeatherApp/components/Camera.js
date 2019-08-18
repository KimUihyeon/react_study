import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { tsParenthesizedType } from '@babel/types';


let barcods = [];
export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
	    flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }

  render() {

    let width = 300;
    let height = 16*width/9; //for portrait mode 3:4
    return (
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            type={this.state.camera.type}
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            style={ styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
          >
              <View style={styles.maskContainer}>
                  <View style={[styles.maskTop, styles.freamColor]}></View>
                  <View style={[styles.maskMid]}>
                    <View style={[styles.maskSide, styles.freamColor]}></View>
                    <View style={styles.maskCenter}>
                        <Text style={styles.centerline}></Text>
                    </View>
                    <View style={[styles.maskSide, styles.freamColor]}></View>
                  </View>
                  <View style={[styles.maskBottom, styles.freamColor]}></View>
              </View>
              <View>
                  <Text>123123</Text>
              </View>
        </RNCamera>
          {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View> */}
        </View>
    );
  }
  onBarCodeRead (scanResult) {
      console.log(scanResult);
      barcods.push(scanResult.data);
      this.props.setMainState(barcods);
    return;
  }
  takePicture = async() => {
      alert('test');
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}




const styles = StyleSheet.create({
    centerline : {
        height : 1,
        backgroundColor : '#fff',
        marginLeft : 10,
        marginRight : 10,
        borderBottomColor : '#f00',
        borderBottomWidth: 1,
        opacity : 0.7
    },
    textBox :{

    },
    freamColor : {
        backgroundColor : '#000000',
        opacity : 0.4,
    },
    maskContainer : {
        left : 0,
        top : 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    maskTop :{
        flex : 1,
        width : '100%',
        padding : 5,
        flexDirection:'row',
    },
    maskSide :{
        flex : 1,
    },
    maskCenter :{
        flex : 15,
        borderColor : '#eeeeee',
        borderWidth : 1,
        justifyContent: 'center',
        flexDirection: 'column',
            
    },
    maskMid :{
        flex : 15,
        flexDirection:'row',
    },
    maskBottom :{
        width : '100%',
        flexDirection:'row',
        padding : 5,
        flex : 1,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
        flex:1,
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
