import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    ScrollView,
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

const Ubahbarang: React.FC<props> = ({ navigation, route }) => {
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState<number>();
    const [stok, setStok] = useState<number>();

    // Get id menggunakan params di previos page
    const index = route.params?.id;
    const sendData = route.params?.data;

    const getDataBarang = async () => {
        const response = await fetch(
            `http://192.168.85.220:5000/barang/${index}`
        );
        const barang = await response.json();
        setNama(barang.nama)
        setHarga(barang.harga)
        setStok(barang.stok)
    };

    useEffect(() => {
        getDataBarang();
    },);
    return (
        <ScrollView>
            <View style={styles.containerForm}>
                <Text style={styles.textLabel}>Nama Barang</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    keyboardType="default"
                    placeholder="Nama barang"
                    value={nama}
                />

                <Text style={styles.textLabel}>Harga</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    keyboardType="numeric"
                    placeholder="Rp."
                    value={harga + ""}
                />

                <Text style={styles.textLabel}>Stok</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    placeholder="/Pcs"
                    keyboardType="numeric"
                    value={stok + ""}
                />
            </View>
            {/* End Form */}

            <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>Kirim</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerForm: {
        paddingHorizontal: 5,
    },
    button: {
        backgroundColor: "#27548A",
        width: 100,
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
        color: "black",
        marginHorizontal: "auto",
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    textLabel: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 3,
    },
});

export default Ubahbarang;
