import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Icon, Button, Toast } from 'native-base';
import axios from 'axios';
import * as actions from '../actions';


import AppIntro from 'react-native-app-intro';

class AppIntroScreen extends Component {
  onSkipBtnHandle = (index) => {
    // Alert.alert('Skip');
    this.props.navigation.navigate('login')
    console.log(index);
  }
  doneBtnHandle = () => {
    this.props.navigation.navigate('login')
  }
  nextBtnHandle = (index) => {
    // Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }


    render() {

      const pageArray = [{
        title: 'Page 1',
        description: 'Description 1',
        img: require('../assets/images/1.jpg'),
        imgStyle: {
          height: 80 * 2.5,
          width: 109 * 2.5,
        },
        backgroundColor: '#fa931d',
        fontColor: '#fff',
        level: 10,
      }, {
        title: 'Page 2',
        description: 'Description 2',
        img: require('../assets/images/1.jpg'),
        imgStyle: {
          height: 93 * 2.5,
          width: 103 * 2.5,
        },
        backgroundColor: '#a4b602',
        fontColor: '#fff',
        level: 10,
      },
      {
        title: 'Page 3',
        description: 'Description 3',
        img: require('../assets/images/1.jpg'),
        imgStyle: {
          height: 70 * 2.5,
          width: 103 * 2.5,
        },
        backgroundColor: '#a4b602',
        fontColor: '#fff',
        level: 10,
      }
    ];
      return (
        <View className='container'>
        <AppIntro
          customStyles={{ btnContainer: {flex: 1} }}
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
          pageArray={pageArray}
        />
        </View>
      );
    }
}


const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },
    loginButtom: {
        width:200,
        justifyContent:'center',
        marginTop:20
    }
})

export default connect(null, actions)(AppIntroScreen);



// <View style={styles.container}>
// <Item>
//   <Input
//       placeholder='User Name'
//       value={this.state.username}
//       autoCapitalize='none'
//       autoFocus={true}
//       onSubmitEditing={() => {
//         this.focusNextField('password');
//       }}
//       returnKeyType={ "next" }
//       ref={ input => {
//         this.inputs['username'] = input;
//       }}
//       onChangeText={username => this.setState({ username })}
//        />
//   <Icon active name='ios-contact' />
// </Item>
// <Item>
//   <Input
//       placeholder='Password'
//       value={this.state.password}
//       autoCapitalize='none'
//       secureTextEntry={true}
//       onSubmitEditing={() => {
//           this.handleSubmit()
//        }}
//        returnKeyType={ "done" }
//        ref={ input => {
//          this.inputs['password'] = input;
//        }}
//        onChangeText={password => this.setState({ password })}
//        />
//   <Icon active name='ios-lock' />
// </Item>
// <View style={{justifyContent: "center" }}>
// {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
// <Button primary onPress={() => this.handleSubmit()} style={styles.loginButtom}><Text style={{color:'white'}}> Login </Text></Button>
// }
// </View>
// </View>
