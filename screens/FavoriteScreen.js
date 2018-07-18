import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import RNCalendarEvents from 'react-native-calendar-events';
import  I18n, { getLanguages } from 'react-native-i18n';

import Header from '../components/Header';


class FavoriteScreen extends Component {
    
    componentDidMount(){
        getLanguages().then(languages => {
            console.log(languages); // ['en-US', 'en']
          });
    }

    getEvents = () => {
        console.log(RNCalendarEvents.saveEvent('Calender Test', {id: 'FE6B128F-C0D8-4FB8-8FC6-D1D6BA015CDE'}));
    }

    render() {
       return (
           <View style={{flex:1}}>
           <Header navigation={this.props.navigation}  title={'Favorite'}/>
             <View style={styles.container}>
                 <Text>{I18n.t('greeting')}</Text>
                 <Text>FavoriteScreen</Text>
                 <Text>FavoriteScreen</Text>
                 <Button onPress={this.getEvents}>
                        <Text>Click Me!</Text>
                </Button>
            </View>   
           </View>
       )
    }
}


I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
  },
  'hi-IN': {
    greeting: 'Bonjour!',
  },
};

const styles = StyleSheet.create({
      container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    }
})



export default FavoriteScreen;
