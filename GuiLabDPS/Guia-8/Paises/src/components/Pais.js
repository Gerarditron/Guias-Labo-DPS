import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card} from 'react-native-elements';

const Pais = ({resultado}) => {
    const {capital, name, subregion, region} = resultado;

    return(
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
            <View style={{justifyContent:'center'}}>
                <Text>{capital}</Text>
                <Text>{region}</Text>
                <Text>{subregion}</Text>
            </View>
        </Card>
    );

};
export default Pais;