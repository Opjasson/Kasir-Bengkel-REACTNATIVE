import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Kasir } from "../pages";

const Route = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="kasir" component={Kasir}/>
        </Stack.Navigator>
    )
};

export default Route;
