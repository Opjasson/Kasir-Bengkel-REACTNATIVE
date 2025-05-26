import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const ProsesTransaksi: React.FC<props> = ({ navigation, route }) => {
    // const [qty, setQty] = useState<string>();
    // const [barangId, setBarangId] = useState<number>();
    // const [transaksiId, setTransaksiId] = useState<number>();
    const [bayar, setBayar] = useState<number>(0);
    const [id, setId] = useState<number>();

    // dapat data cart dari halaman tambah transaksi
    const cart = route.params?.cart;
    const totalHarga = route.params?.totalHarga;
    const transaksiId = route.params?.transaksiData;

    console.log("ini data transaksi", transaksiId);

    const createCart = async () => {
        await fetch(`http://192.168.85.220:5000/transaksi/${transaksiId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                totalHarga: totalHarga,
            }),
        });
        cart.forEach(async (item : any) => {
            await fetch("http://192.168.85.220:5000/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    qty: item.qty,
                    transaksiId: transaksiId,
                    barangId: item.id,
                }),
            });
        });
        navigation.navigate("history-transaksi");
    };

    return (
        <View>
            {cart.map((item, index) => (
                <View key={index}>
                    <Text>{item.nama}</Text>
                    <Text>
                        {item.qty} x{item.harga}
                    </Text>
                </View>
            ))}

            <View>
                <Text>Total : Rp.{totalHarga}</Text>
                <Text>Bayar :</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    onChangeText={(text) => setBayar(Number(text))}
                    keyboardType="numeric"
                    placeholder="Bayar"
                />
                <Text>Kembali : Rp.{bayar ? bayar - totalHarga : 0}</Text>
            </View>

            <TouchableOpacity
                style={styles.tambahBarang}
                onPress={() => createCart()}>
                <Text style={{ fontSize: 17, color: "white" }}>Tambah</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tambahBarang: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "green",
        gap: 5,
        height: 40,
        paddingHorizontal: 5,
        marginTop: 5,
    },
});

export default ProsesTransaksi;
