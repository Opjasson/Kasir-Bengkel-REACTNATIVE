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
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import Button from "@/app/components/moleculs/Button";
import Fontisto from "@expo/vector-icons/Fontisto";

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
];

const cartTest = [
    {
        namaBarang: "jask",
        qty: 0,
    },
];

const formatRupiah = (number) => {
    return "RP " + number.toLocaleString("id-ID");
};

const Laporan: React.FC<props> = ({ navigation }) => {
    const [open, setOpen] = useState(false);

    const [barang, setBarang] = useState<
        {
            id: number;
            nama: string;
            harga_beli: number;
            harga_jual: number;
            stok: number;
        }[]
    >([]);

    const [cart, setCart] = useState<
        {
            barangId: number;
            createdAt: string;
        }[]
    >([]);
    const [date, setDate] = useState(new Date());

    const [dataLaporan, setDataLaporan] = useState<
        {
            catatan: string;
            pengeluaran: number;
            tanggal: string;
            penjualan: number;
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

    // convert tanggal menjadi string
    const dateNow = date.toISOString().split("T")[0];

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const getHistorys = async () => {
        try {
            const response = await fetch(
                "http://192.168.220.220:5000/transaksi"
            );
            // const history = (await response.json()) as {
            //     response: {
            //         carts: [];
            //         id: number;
            //         uuid: string;
            //         totalHarga: number;
            //         createdAt: string;
            //     }[];
            // };
            // const dataArray = history.response;
            // setLaporan(dataArray);
            const dataRes = await response.json();
            console.log(dataRes);
        } catch (error) {
            console.log(error);
        }
    };

    const getCart = async () => {
        try {
            const response = await fetch("http://192.168.220.220:5000/cart");
            const cat = await response.json();
            setCart(cat.response);
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
        getCart();
    }, []);

    useEffect(() => {
        getDataBarang();
    }, []);

    useEffect(() => {
        getHistorys();
    }, []);

    console.log(barang);

    // 111111---------------------------------
    const getNamabarangCart = cart.map((a) => a.barangId);
    const getQTYbarangCart = cart.map((a) => a.qty);

    const grouped = cart.reduce((acc, curr) => {
        acc[curr.barangId] = (acc[curr.barangId] || 0) + curr.qty;
        return acc;
    }, {});

    const resultQtyOnly = Object.values(grouped);

    // const result = Object.values(grouped);

    const hasil = barang
        .filter((item) => getNamabarangCart.includes(item.id))
        .map((item) => item.nama);

    const haha = hasil.map((item, index) => ({
        ...cartTest[0], // copy isi template
        namaBarang: hasil[index],
        qty: resultQtyOnly[index], // ganti catatan dengan nama baru
    }));

    // console.log(haha);
    // console.log(resultQtyOnly);

    // -----------------------

    // 22222------------------------------------------------------------
    const dataNama = barang.map((item) => item.nama);
    const pengeluaran = barang.map((item) => item.harga_beli * item.stok);
    const hitung = haha.map((p) => {
        const barangData = barang.find((b) => b.nama === p.namaBarang);
        const total = barangData ? barangData.harga_jual * p.qty : 0;
        return {
            nama: p.namaBarang,
            totalPenjualan: total,
        };
    });

    const tanggal = cart.map((item) => item.createdAt.split("T")[0]);
    const totalPenjualan = hitung.map((item) => item.totalPenjualan);

    const handleUpdate = () => {
        const hasil = dataNama.map((nama, index) => ({
            ...data[0], // copy isi template
            catatan: nama,
            pengeluaran: pengeluaran[index], // ganti catatan dengan nama baru
            penjualan: totalPenjualan[index],
            tanggal: tanggal[index],
        }));

        setDataLaporan(hasil);
    };

    const filterData = dataLaporan.filter(
        (item) => item.tanggal === date.toISOString().split("T")[0]
    );

    console.log("cart", tanggal);

    // ------------------------------------------------------------
    const showDatepicker = () => {
        handleUpdate()
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: "date",
            is24Hour: true,
        });
    };

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
            <ScrollView style={{ paddingHorizontal: 8 }}>
                <View
                    style={{
                        paddingLeft: 25,
                        paddingVertical: 15,
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: "900" }}>
                        Laporan Penjualan Per Hari
                    </Text>

                    <Button
                        style={styles.buttonDate}
                        // aksi={showDatepicker}
                        aksi={showDatepicker}
                        simbol={
                            <Fontisto name="date" size={24} color="black" />
                        }>
                        {dateNow}
                    </Button>
                </View>
                {/* menu bagian */}
                <ScrollView
                    horizontal
                    style={{
                        backgroundColor: "#FDFFB8"
                    }}>
                    <View style={styles.container}>
                        {/* Header */}
                        <View style={[styles.row, styles.header]}>
                            <Text style={{ width: 50 }}>No</Text>
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
                        {filterData.length > 0 ? (filterData.map((item, index) => {
                            const untungRugi =
                                item.penjualan - item.pengeluaran;
                            return (
                                <View key={index} style={styles.row}>
                                    <Text style={{ width: 50 }}>
                                        {index + 1}
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
                        })) : (
                            <Text style={{ color : "black", fontSize : 40 }}>Data tidak tersedia</Text>
                        )}
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
    buttonDate: {
        borderWidth: 1,
        width: 130,
        flexDirection: "row",
        gap: 5,
        marginTop: 20,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        backgroundColor: "#CFFFE2",
    },
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
        width: 110,
        borderRightWidth: 0.5,
        paddingLeft: 10,
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
