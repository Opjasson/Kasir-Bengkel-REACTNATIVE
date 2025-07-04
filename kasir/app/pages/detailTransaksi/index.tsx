import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface props {
    route: RouteProp<any, any>;
    navigation: NavigationProp<any, any>;
}

const DetailTransaksi: React.FC<props> = ({ route, navigation }) => {
    const [id, setId] = useState<number>();
    const [uuid, setUuid] = useState<string>();
    const [cart, setCart] = useState<
        {
            qty: number;
            barangId: number;
            transaksiId: number;
        }[]
    >([]);

    const [totalHarga, setTotalHarga] = useState<number>();
    const [createdAt, setCreatedAt] = useState<string>();

    const routeUuid = route.params?.uuid;

    const getTransaksiByUUID = async () => {
        const response = await fetch(
            `http://:5000/transaksi/${routeUuid}`
        );
        const dataJson = await response.json();
        setCart(dataJson.carts);
        setUuid(dataJson.uuid);
        setTotalHarga(dataJson.totalHarga);
        setCreatedAt(dataJson.createdAt);
        setId(dataJson.id);
    };

    const [barang, setBarang] = useState<
        {
            id: number;
            nama: string;
            harga: number;
            stok: number;
        }[]
    >([]);
    // console.log(data);

    const getDataBarang = async () => {
        try {
            const response = await fetch("http://192.168.3.220:5000/barang");
            const barang = await response.json();
            setBarang(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTransaksiByUUID();
    });

    useEffect(() => {
        getDataBarang();
    }, []);

    const deleteTransaksi = async () => {
        await fetch(`http://192.168.3.220:5000/transaksi/${id}`, {
            method: "DELETE",
        });
        navigation.navigate("history-transaksi");
    };

    return (
        <View style={styles.containerTransaksi}>
            <View style={styles.dataTransaksi}>

                <Text>No id : {id}</Text>
                <Text>{createdAt?.split("T")[0]}</Text>

                {cart.map((item, index) => (
                    <View key={index} style={styles.containerCart}>
                        <Text>
                            {barang.find((e) => e.id === item.barangId)?.nama}
                        </Text>
                        <Text>
                            {item.qty} x{" "}
                            {barang.find((e) => e.id === item.barangId)?.harga}
                        </Text>
                    </View>
                ))}
                <Text>Total harga : {totalHarga}</Text>
            </View>

            <TouchableOpacity onPress={() => deleteTransaksi()} style={styles.buttonDelete}>
              <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    containerTransaksi: {
        borderWidth: 2,
        padding : 10
    },
    dataTransaksi: {
        alignItems: "center",
    },
    containerCart: {
        alignItems: "center",
    },
    buttonDelete : {
      backgroundColor : "red",
      width : "40%",
      alignItems : "center",
      marginTop : 10,
      marginHorizontal : "auto",
      borderRadius : 20
    }
});

export default DetailTransaksi;
