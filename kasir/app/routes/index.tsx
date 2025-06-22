import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Kasir, ManageBarang, Ubahbarang, TambahBarang, HistoryTransaksi, DetailTransaksi, Login } from "../pages";
import ProsesTransaksi from "../pages/prosesTransaksi";


const Route = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="kasir" component={Kasir} />
            <Stack.Screen name="manage-barang" component={ManageBarang} />
            <Stack.Screen name="history-transaksi" component={HistoryTransaksi} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Ubah barang",
                }}
                name="ubah-barang"
                component={Ubahbarang}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Tambah barang",
                }}
                name="tambah-barang"
                component={TambahBarang}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Detail Transaksi",
                }}
                name="detail-transaksi"
                component={DetailTransaksi}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Proses Transaksi",
                }}
                name="proses-transaksi"
                component={ProsesTransaksi}
            />
        </Stack.Navigator>
    );
};

export default Route;
