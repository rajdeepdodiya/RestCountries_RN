import React, { Component, ImageBackground } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format';

class CountriesList extends Component {

    static propTypes = {
        country: PropTypes.object.isRequired,
    }
    state = {
        error: false,
    }
    render() {

        const { country } = this.props;

        return (
            <View style={styles.container}>
                <Image
                onError={(error) => {
                    this.setState({error: true})
                }}

                source={ this.state.error 
                    ? require('../../assets/images/image_not_available.png') 
                    : {uri: country.flags.png}}

                style={styles.flag}/>    
                <View style={styles.countryInfo}>
                
                    <Text style={styles.name}>{country.name} ({country.alpha2Code})</Text>
                    <Text style={styles.text}>Capital: {country.capital}</Text>
                    <Text style={styles.text}>Region: {country.region}</Text>
                    <NumberFormat
                    value={country.population}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(item) => <Text style={styles.text}>Population: {item}</Text>
                    }
                    />
                </View>
                
                {/* <Text style={styles.blankLine}>-------------</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 5,
    },

    flag: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: "center",
        width: 100,
        height: 100,

    },
    countryInfo: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    name: {
        fontSize: 20, 
        color: 'black', 
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16, 
        color: 'black',
    },
})

export default CountriesList;