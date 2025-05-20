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
import { NavigationProp } from "@react-navigation/native";
import MenuDrawer from "react-native-side-drawer";
import React, { useState } from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerContent } from "@/app/components";

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

    const sideBarContent = () => {
        return (
            <DrawerContent
                toggleOpen={toggleOpen}
                onPress1={() => navigation.navigate("kasir")}
                onPress2={() => navigation.navigate("manage-barang")}
                onPress3={() => navigation.navigate("history-transaksi")}
            />
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
                <TouchableOpacity style={styles.tambahBarang} onPress={() => navigation.navigate("tambah-barang")}>
                    <FontAwesome6 name="add" size={25} color="white" />
                    <Text style={{ fontSize: 17, color: "white" }}>Tambah</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate("ubah-barang")} style={styles.menuIcon}>
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
                drawerContent={sideBarContent()}
                drawerPercentage={70}
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
    containerTambah: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 5
    },
    tambahBarang: {
        flexDirection: "row",
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "green",
        gap: 5,
        height: 40,
        paddingHorizontal: 5,
        marginTop: 5
    },
    containerSearch: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#F8F4E1",
        paddingHorizontal: 5,
        borderRadius: 10,
        elevation: 5,
    },
    searchHotel: {
        width: 240,
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
