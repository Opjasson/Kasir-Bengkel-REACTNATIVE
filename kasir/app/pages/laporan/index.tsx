import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp } from "@react-navigation/native";
import MenuDrawer from "react-native-side-drawer";
import { DrawerContent } from "@/app/components";

interface props {
    navigation: NavigationProp<any, any>;
}

const Laporan: React.FC<props> = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [Laporan, setLaporan] = useState<
        {
            carts: [];
            id: number;
            uuid: string;
            totalHarga: number;
            createdAt: string;
        }[]
    >([]);

    const [barang, setBarang] = useState<
        {
            id: number;
            nama: string;
            harga: number;
            stok: number;
        }[]
    >([]);

    const toggleOpen = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    const sideBarContent = () => {
        return (
            <DrawerContent
                toggleOpen={toggleOpen}
                onPress1={() => navigation.navigate("kasir")}
                onPress2={() => navigation.navigate("manage-barang")}
                onPress3={() => navigation.navigate("history-transaksi")}
                onPress4={() => navigation.navigate("login")}
                onPress5={() => navigation.navigate("laporan")}
            />
        );
    };

    const getHistorys = async () => {
        try {
            const response = await fetch(
                "http://192.168.220.220:5000/transaksi"
            );
            const history = (await response.json()) as {
                response: {
                    carts: [];
                    id: number;
                    uuid: string;
                    totalHarga: number;
                    createdAt: string;
                }[];
            };
            const dataArray = history.response;
            setLaporan(dataArray);
        } catch (error) {
            console.log(error);
        }
    };

    const getDataBarang = async () => {
        try {
            const response = await fetch("http://192.168.220.220:5000/barang");
            const barang = await response.json();
            setBarang(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataBarang();
    }, []);

    useEffect(() => {
        getHistorys();
    }, []);

    return (
        <View style={styles.container}>
            {/* bagian atas aplikasi kasir */}
            <View style={styles.headContainer}>
                <Ionicons
                    name="menu"
                    size={30}
                    color="white"
                    onPress={() => toggleOpen()}
                />
                <Text style={styles.headTitle}>History Transaksi</Text>
            </View>
            {/* ------------ */}

            {/* menampilkan daftar menu */}
            <ScrollView>
                {/* menu bagian */}
               
                {/* ------------ */}
            </ScrollView>

            {/* ---------- */}
            <MenuDrawer
                open={open}
                position={"left"}
                drawerContent={sideBarContent()}
                drawerPercentage={70}
                animationTime={250}
                overlay={true}
                opacity={0.4}></MenuDrawer>
        </View>
    );
};

const styles = StyleSheet.create({
    animatedBox: {
        flex: 1,
        backgroundColor: "#38C8EC",
        padding: 10,
    },
    sidebarHead: {
        flexDirection: "row",
        borderWidth: 2,
        justifyContent: "space-between",
    },
    sidebarTitle: {
        fontSize: 17,
        fontWeight: "700",
    },
    sidebarMain: {
        borderWidth: 2,
        flexDirection: "column",
        justifyContent: "space-between",
        height: "50%",
        marginTop: 20,
    },
    sidebarMenu: {
        fontSize: 20,
        fontWeight: "800",
    },
    tutupSidebar: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flex: 1,
    },
    headContainer: {
        flexDirection: "row",
        position: "relative",
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: "#27548A",
    },
    headTitle: {
        fontSize: 20,
        marginLeft: 30,
        color: "white",
    },
    containerSearch: {
        flexDirection: "row",
        borderWidth: 3,
        alignItems: "center",
    },
    containerBarang: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        backgroundColor: "#FFF085",
        padding: 5,
        paddingVertical: 15,
    },
    barisInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    barisInfo2: {
        alignItems: "flex-end",
        flexDirection: "column",
        gap: 15,
    },
});

export default Laporan;
