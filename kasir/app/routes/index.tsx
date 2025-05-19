import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Route = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="kasir" component={}/>
        </Stack.Navigator>
    )
};

export default Route;
