import React from 'react';
import { ImagePickerIOS } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {//Container
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {//each tab option
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {//style of icon
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {//style of the text
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name='ios-easel' size={size} color={focused ? '#8257e5': color} />
                        )
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name='ios-heart' size={size} color={focused ? '#8257e5': color} />
                        )
                    }
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;