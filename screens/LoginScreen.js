import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {  Item, Input, Icon, Button, Toast } from 'native-base';
import * as actions from '../actions';


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: null, loading: false };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

    focusNextField(id) {
        this.inputs[id]._root.focus();
    }



     handleSubmit = async () => {
     let {username,password} = this.state;
     if(!username){
           this.handleError("Username is required!")
           return false;
     }
     if(!password){
          this.handleError("Password is required!")
           return false;
     }
     this.setState({ error: null, loading: true });

     try {
         let data = {username:this.state.username,password:this.state.password};
         this.props.signIn(data, () => {
             this.props.navigation.navigate('main');
         }).catch(error => {
           return error;
         });
       this.props.navigation.navigate('main')
       this.setState({ loading: false });
     } catch (err) {
       this.setState({ error: 'Something went wrong', loading: false });
     }
   }


   handleError(error){
     Toast.show({
               text: error,
               buttonText: "Okay",
               type: "danger"
         })
   }


    render() {
      return (  
        <View style={styles.container}>
            <Item>
              <Input
                  placeholder='User Name'
                  value={this.state.username}
                  autoCapitalize='none'
                  onSubmitEditing={() => {
                    this.focusNextField('password');
                  }}
                  returnKeyType={ "next" }
                  ref={ input => {
                    this.inputs['username'] = input;
                  }}
                  onChangeText={username => this.setState({ username })}
                  />
              <Icon active name='ios-contact' />
            </Item>
            <Item>
              <Input
                  placeholder='Password'
                  value={this.state.password}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  onSubmitEditing={() => {
                      this.handleSubmit()
                  }}
                  returnKeyType={ "done" }
                  ref={ input => {
                    this.inputs['password'] = input;
                  }}
                  onChangeText={password => this.setState({ password })}
                  />
              <Icon active name='ios-lock' />
            </Item>
           <View style={{justifyContent: "center" }}>
                {this.state.loading ? <ActivityIndicator color="#8E24AA" size="large" /> :
                <Button primary onPress={() => this.handleSubmit()} style={styles.loginButtom}><Text style={{color:'white'}}> Login </Text></Button>
                }
           </View>
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

export default connect(null, actions)(LoginScreen);


