import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faSearch, faVideo, faUser, faFilm } from '@fortawesome/free-solid-svg-icons';
// SCREENS
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import ReviewScreen from './screens/ReviewScreen';
import SearchScreen from './screens/SearchScreen';
import WatchlistScreen from './screens/WatchlistScreen';

// Screen Names
const homeName = 'Home';
const accountName = 'Account';
const reviewName = 'Reviews';
const searchName = 'Search';
const watchlistName = 'Watchlist';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const MainContainer = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let routeName = route.name;


                        if (routeName === homeName) 
                        {
                            iconName = faHouse;
                            color = focused ? 'orange' : 'black';
                        } 
                            else if (routeName === searchName) 
                        {
                            iconName = faSearch;
                            color = focused ? 'orange' : 'black';

                        } 
                            else if (routeName === watchlistName) 
                        {
                            iconName = faFilm;
                            color = focused ? 'orange' : 'black';
                        } 
                            else if (routeName === reviewName) 
                        {
                            iconName = faVideo;
                            color = focused ? 'orange' : 'black';
                        } 
                            else if (routeName === accountName) 
                        {
                            iconName = faUser;
                            color = focused ? 'orange' : 'black';
                        }

                        return <FontAwesomeIcon icon={iconName} color={color}/>

                    },
                    tabBarActiveTintColor: 'orange',
                    inactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 5, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 80}
                })}

            >
            
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={searchName} component={SearchScreen} />
            <Tab.Screen name={watchlistName} component={WatchlistScreen} />
            <Tab.Screen name={reviewName} component={ReviewScreen} />
            <Tab.Screen name={accountName} component={AccountScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainContainer;