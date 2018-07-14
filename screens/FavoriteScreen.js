import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import RNCalendarEvents from 'react-native-calendar-events';

import Header from '../components/Header';


class FavoriteScreen extends Component {
    
    getEvents = () => {
        console.log(RNCalendarEvents.saveEvent('Calender Test', {id: 'FE6B128F-C0D8-4FB8-8FC6-D1D6BA015CDE'}));
    }

    render() {
       return (
           <View style={{flex:1}}>
           <Header navigation={this.props.navigation}  title={'Favorite'}/>
             <View style={styles.container}>
                 <Text>FavoriteScreen</Text>
                 <Text>FavoriteScreen</Text>
                 <Text>FavoriteScreen1111</Text>
                 <Button onPress={this.getEvents}>
                        <Text>Click Me!</Text>
                </Button>
            </View>   
           </View>
       )
    }
}


const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
})

export default FavoriteScreen;
