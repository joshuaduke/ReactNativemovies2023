import * as React from 'react';
import {View, Text, TextInput, FlatList } from 'react-native';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './searchscreen.style';

const searchPageSuggestions = 
[
    { key: 1, title: 'Top Movies', apiSearchName: ''},
    { key: 2, title: 'Top Movies', apiSearchName: ''},
    { key: 3, title: 'Top Movies', apiSearchName: ''},
    { key: 4, title: 'Top Movies', apiSearchName: ''},
    { key: 5, title: 'Top Movies', apiSearchName: ''},
    { key: 6, title: 'Top Movies', apiSearchName: ''},
]

const SearchScreen = ({navigation}) => {
    return (
        <View>
            <TextInput 
                style={styles.input}
            ></TextInput>
            <FlatList 
            style={ { backgroundColor: 'red'} }
                data={searchPageSuggestions}
                renderItem={({item}) => (
                    <Text>Testing</Text> 
                )}
                keyExtractor={item => item.key }
            />
            {/* <Text
                onPress={() => navigation.navigate('Search')}
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >Search Screen</Text> */}
        </View>
    )
}

export default SearchScreen;