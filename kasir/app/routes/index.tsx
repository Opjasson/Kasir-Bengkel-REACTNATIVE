import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Kasir, ManageBarang, Ubahbarang } from "../pages";
import TambahBarang from "../pages/tambahBarang";

const Route = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="kasir" component={Kasir} />
            <Stack.Screen name="manage-barang" component={ManageBarang} />
            <Stack.Screen name="tambah-barang" component={ManageBarang} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Kembali",
                }}
                name="ubah-barang"
                component={Ubahbarang}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Kembali",
                }}
                name="tambah-barang"
                component={TambahBarang}
            />
        </Stack.Navigator>
    );
};

export default Route;
