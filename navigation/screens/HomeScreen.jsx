import * as React from 'react';
import {View, Text, FlatList, SafeAreaView } from 'react-native';
import MovieSection from '../../components/MovieSection/MovieSection';

const homePageSections = 
[
    { key: 1, title: 'Coming Soon', apiSearchName: 'upcoming'},
    { key: 2, title: 'In Theatres', apiSearchName: 'now_playing'},
    { key: 3, title: 'Movies Watched', apiSearchName: ''},
    { key: 4, title: 'Watchlist', apiSearchName: ''}
]

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
             <FlatList 
                data={homePageSections}
                renderItem={( {item} ) => (
                    <MovieSection  data={item}/>
                )}
                keyExtractor={item => item.key}

            />    
        </SafeAreaView>
    )
}

export default HomeScreen;