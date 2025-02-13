import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router/stack';
import { StatusBar } from "expo-status-bar"

export default function _layout() {
    return (
        <GestureHandlerRootView>
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        headerTransparent: true,
                        headerShown: false,
                        headerTitleStyle: {
                            color: "#fff"
                        }
                    }}
                />
                <Stack.Screen
                    name='Playground'
                    options={{
                        // headerTransparent: true,
                        headerShown: false,
                        // headerTitleStyle: {
                        //     color: "#fff"
                        // }
                    }}
                />
            </Stack>
            <StatusBar style="auto" />
        </GestureHandlerRootView>
    )
}