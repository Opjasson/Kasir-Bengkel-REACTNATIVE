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

const data = [
    {
        tanggal: "17 Sep 2020",
        catatan: "Telkomsel 5.000",
        penjualan: 7000,
        pengeluaran: 5850,
    },
    {
        tanggal: "17 Sep 2020",
        catatan: "BPJS Kesehatan",
        penjualan: 7500,
        pengeluaran: 79000,
    },
    {
        tanggal: "17 Sep 2020",
        catatan: "PLN 100.000",
        penjualan: 102850,
        pengeluaran: 100100,
    },
    {
        tanggal: "17 Sep 2020",
        catatan: "PLN 20.000",
        penjualan: 22850,
        pengeluaran: 20100,
    },
    {
        tanggal: "16 Sep 2020",
        catatan: "XTRA Combo\n10GB+10GB",
        penjualan: 87500,
        pengeluaran: 83680,
    },
    {
        tanggal: "16 Sep 2020",
        catatan: "PLN 20.000",
        penjualan: 22850,
        pengeluaran: 20100,
    },
    {
        tanggal: "15 Sep 2020",
        catatan: "bayar\nsewa\nmesin\nedc\nbpks",
        penjualan: 1550000,
        pengeluaran: 0,
    },
    {
        tanggal: "14 Sep 2020",
        catatan: "PLN 20.000",
        penjualan: 22850,
        pengeluaran: 20100,
    },
    {
        tanggal: "13 Sep 2020",
        catatan: "BPJS Kesehatan",
        penjualan: 30500,
        pengeluaran: 28000,
    },
    {
        tanggal: "11 Sep 2020",
        catatan: "PLN 20.000",
        penjualan: 22850,
        pengeluaran: 20100,
    },
    {
        tanggal: "08 Sep 2020",
        catatan: "PLN 20.000",
        penjualan: 22850,
        pengeluaran: 20100,
    },
    {
        tanggal: "07 Sep 2020",
        catatan: "Axis\nAigo\nMini\n3GB\n24\nJAM\n15\nHari",
        penjualan: 25000,
        pengeluaran: 22500,
    },
];

const formatRupiah = (number) => {
    return "RP " + number.toLocaleString("id-ID");
};

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
                <Text style={styles.headTitle}>Laporan Penjualan</Text>
            </View>
            {/* ------------ */}

            {/* menampilkan daftar menu */}
            <ScrollView>

                <View style={{ borderWidth : 2, paddingLeft : 25, paddingVertical : 15 }}>
                    <Text style={{ fontSize : 20, fontWeight : "900" }}>Laporan Penjualan PerBulan</Text>
                </View>
                {/* menu bagian */}
                <ScrollView horizontal>
                    <View style={styles.container}>
                        {/* Header */}
                        <View style={[styles.row, styles.header]}>
                            <Text
                                style={[
                                    styles.cell,
                                    styles.headerText,
                                    { flex: 1 },
                                ]}>
                                Tanggal
                            </Text>
                            <Text
                                style={[
                                    styles.cell,
                                    styles.headerText,
                                    { flex: 2 },
                                ]}>
                                Catatan
                            </Text>
                            <Text style={[styles.cell, styles.headerText]}>
                                Penjualan
                            </Text>
                            <Text style={[styles.cell, styles.headerText]}>
                                Pengeluaran
                            </Text>
                            <Text style={[styles.cell, styles.headerText]}>
                                Untung/Rugi
                            </Text>
                        </View>

                        {/* Data Rows */}
                        {data.map((item, index) => {
                            const untungRugi =
                                item.penjualan - item.pengeluaran;
                            return (
                                <View key={index} style={styles.row}>
                                    <Text style={[styles.cell, { flex: 1 }]}>
                                        {item.tanggal}
                                    </Text>
                                    <Text style={[styles.cell, { flex: 2 }]}>
                                        {item.catatan}
                                    </Text>
                                    <Text style={[styles.cell, styles.green]}>
                                        {formatRupiah(item.penjualan)}
                                    </Text>
                                    <Text style={[styles.cell, styles.red]}>
                                        {item.pengeluaran
                                            ? formatRupiah(item.pengeluaran)
                                            : "-"}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.cell,
                                            untungRugi >= 0
                                                ? styles.green
                                                : styles.red,
                                        ]}>
                                        {formatRupiah(untungRugi)}
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
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
    container: {
        padding: 10,
        minWidth: 700,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 6,
    },
    header: {
        backgroundColor: "#f0f0f0",
        borderBottomWidth: 2,
    },
    headerText: {
        fontWeight: "bold",
    },
    cell: {
        flex: 1,
        // paddingHorizontal: 6,
        // paddingRight : 20,
        width : 110,
        borderRightWidth : 0.5,
        paddingLeft : 10
    },
    green: {
        color: "green",
    },
    red: {
        color: "red",
    },
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
