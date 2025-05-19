import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Kasir, ManageBarang } from "../pages";

const Route = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="kasir" component={Kasir} />
            <Stack.Screen name="manage-barang" component={ManageBarang} />
        </Stack.Navigator>
    );
};

export default Route;
