import React, { Component } from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import ajax from '../ajax'
import CountriesList from './CountriesList';

class App extends Component {

    state = {
        countriesList: [],
        message: "Loading countries from API"
    }

    checkEmptyFlag = () => {
        let k = 0

        console.log(`#2: countriesList: ${this.state.countriesList.length}`);
        
        for(let i = 0; i < this.state.countriesList.length; i++){

            if(this.state.countriesList[i].flags.png === undefined){
                console.log(this.state.countriesList[i].name);
                 k++;
            }
        }
        
        console.log(`${k} countries with undefined flag png`);
    }

    async componentDidMount() {
        const countriesListFromAPI = await ajax.fetchCountries();
        // console.log(countriesListFromAPI);
        console.log(`#1: countriesList: ${this.state.countriesList.length}`);
       
        if(countriesListFromAPI.length > 0){
            this.setState({
               
                countriesList: countriesListFromAPI,
                message: "Countries are fetched"
            });

            this.checkEmptyFlag();
        }
        else {
            this.setState({
                
                message: "Error in fetching countries"
            });
        }        
    }

    render() {
        if(this.state.countriesList.length > 0){
            return (
                <SafeAreaView style={styles.container}>
                    <Text>{this.state.message}</Text>

                    <FlatList style={styles.list}
                    data={this.state.countriesList}
                    renderItem={ ({item}) =>
                        <CountriesList country={item} />                        
                    }>
                    </FlatList>
                    
                </SafeAreaView>
            )
        }
        return(
            <SafeAreaView style={styles.container}>
                <Text>{this.state.message}</Text>
            </SafeAreaView> 
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'light-grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        flex: 1,
        width: '100%',
    },
    
})

export default App;