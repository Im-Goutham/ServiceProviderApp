import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'


class HeaderComponent extends Component {


    render() {
      let {title} = this.props;
       return (
          <Header>
           <Left style={{flex: 1}}/>
            <Body style={{flex: 1,alignItems:'center'}}>
              <Title>{title}</Title>
            </Body>
           <Right  style={{flex: 1}}/>
        </Header>
       )
    }
}


export default HeaderComponent;
