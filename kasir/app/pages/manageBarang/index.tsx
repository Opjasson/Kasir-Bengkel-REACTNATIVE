import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { NavigationProp } from "@react-navigation/native";
import MenuDrawer from "react-native-side-drawer";
import React, { useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface props {
    navigation: NavigationProp<any, any>;
}

const ManageBarang : React.FC <props> = ({navigation}) => {
    const [find, setFind] = useState<string>();
    const [findLower, setFindLower] = useState<string>("");
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    const drawerContent = () => {
        return (
            <View style={styles.animatedBox}>
                <View style={styles.sidebarHead}>
                    <FontAwesome5
                        name="cash-register"
                        size={28}
                        color="black"
                    />
                    <Text style={styles.sidebarTitle}>Kasir Bengkel</Text>
                </View>

                <View style={styles.sidebarMain}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("kasir")}>
                        <Text style={styles.sidebarMenu}>Transaksi Baru</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("manage-barang")}>
                        <Text style={styles.sidebarMenu}>Manage Menu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("/")}>
                        <Text style={styles.sidebarMenu}>
                            History transaksi
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5} style={styles.tutupSidebar} onPress={() => toggleOpen()}>
                        <Ionicons
                            name="arrow-back-circle-outline"
                            size={30}
                            color="black"
                        />
                        <Text style={{ fontSize: 18 }}>Tutup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* bagian atas aplikasi kasir */}
            <View style={styles.headContainer}>
                <Ionicons
                    name="menu"
                    size={24}
                    color="black"
                    onPress={() => toggleOpen()}
                />
                <Text>Manage Barang</Text>
            </View>
            {/* ------------ */}

            <View style={styles.containerTambah}>
                <TouchableOpacity style={styles.tambahBarang}>
                    <FontAwesome6 name="add" size={30} color="black" />
                    <Text>Tambah</Text>
                </TouchableOpacity>

                {/* bagian pencarian barang */}
                <View style={styles.containerSearch}>
                    <TextInput
                        placeholder="Cari Hotel"
                        style={styles.searchHotel}
                        onChangeText={(text) => {
                            setFind(text);
                            setFindLower(text.toLowerCase());
                        }}
                    />
                    <Entypo name="magnifying-glass" size={30} color="black" />
                </View>
                {/* --------------- */}
            </View>

            {/* menampilkan daftar menu */}
            <ScrollView>
                {/* menu bagian */}
                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <TouchableOpacity onPress={() => navigation.navigate("")} style={styles.menuIcon}>
                            <FontAwesome
                                name="pencil"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("")} style={styles.menuIcon}>
                            <Fontisto name="trash" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ------------ */}
            </ScrollView>
            {/* ---------- */}
            <MenuDrawer
                open={open}
                position={"left"}
                drawerContent={drawerContent()}
                drawerPercentage={50}
                animationTime={250}
                overlay={true}
                opacity={0.4}></MenuDrawer>
        </View>
    );
}

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
        fontWeight: "800"
    },
    tutupSidebar: {
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        flex: 1,
    },
    headContainer: {
        flexDirection: "row",
        position: "relative",
    },
    containerTambah: {
        flexDirection: "row"
    },
    tambahBarang: {
        flexDirection : "row",
        borderWidth: 2,
        width: 100,
        borderRadius: 30,
        alignItems: "center",
        backgroundColor: "green"
    },
    containerSearch: {
        flexDirection: "row",
        borderWidth: 3,
        alignItems: "center",
    },
    searchHotel: {
        width: 270,
        borderWidth: 2,
    },
    containerMenu: {
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    menuIcon: {
        fontSize: 30,
        borderWidth: 2,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    trashIcon: {
        fontSize: 30,
    },
    menu: {},
    actionMenu: {
        flexDirection: "row",
    },
});

export default ManageBarang
