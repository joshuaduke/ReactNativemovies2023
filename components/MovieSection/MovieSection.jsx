import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import styles from "./moviesection.style";

const data = [
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "1"},
    { link: require('../../assets/test-Images/lotr.jpeg'), key: "2"},
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "3"},
    { link: require('../../assets/test-Images/spiderverse.jpeg'), key: "4"},
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "5"},
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "6"},
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "7"},
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "8"},
    { link: require('../../assets/test-Images/theBatman.jpg'), key: "9"},
]

const MovieSection = ( props ) => {
    return (
        <View style={styles.movieGroup}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={styles.headerText}>{props.data.title}</Text>
                <TouchableOpacity>
                    <Text>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={( {item} )  => 
                (
                <View>
                    <Image
                        style={styles.imageStyles}
                        source={ item.link }
                        // source={ {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                    />
                </View>
                )}
                keyExtractor={item => item.key}
                horizontal
            />
        </View>
    )
}

export default MovieSection;