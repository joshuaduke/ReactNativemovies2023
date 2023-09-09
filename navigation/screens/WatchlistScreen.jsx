import * as React from 'react'
import {View, Text} from 'react-native'

const WatchlistScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Watchlist')}
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >Watchlist Screen</Text>
        </View>
    )
}

export default WatchlistScreen;