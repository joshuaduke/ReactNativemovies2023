import * as React from 'react'
import {View, Text} from 'react-native'

const SearchScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Search')}
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >Search Screen</Text>
        </View>
    )
}

export default SearchScreen;