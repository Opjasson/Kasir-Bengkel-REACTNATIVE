import React, { useState } from "react";
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

import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp } from "@react-navigation/native";

import MenuDrawer from "react-native-side-drawer";
import { DrawerContent } from "@/app/components";

interface props {
    navigation: NavigationProp<any, any>;
}

const HistoryTransaksi: React.FC<props> = ({ navigation }) => {
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
                <Text>History Transaksi</Text>
            </View>
            {/* ------------ */}

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

            {/* menampilkan daftar menu */}
            <ScrollView>
                {/* menu bagian */}
                <TouchableOpacity onPress={() => navigation.navigate("")} style={styles.containerBarang}>
                    <Text>30 jan 2025</Text>
                    <View style={styles.barisInfo}>
                        <Text>Rp.500,000</Text>

                        <View style={styles.barisInfo2}>
                            <Text>#1</Text>
                            <Text>Oli repsol:1 oli yamaha:1</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* ------------ */}
            </ScrollView>
            {/* ---------- */}
            <MenuDrawer
                open={open}
                position={"left"}
                drawerContent={sideBarContent()}
                drawerPercentage={50}
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
    containerBarang: {
        borderWidth: 2,
        paddingHorizontal: 10,
    },
    barisInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    barisInfo2: {
        alignItems: "flex-end",
    }
});

export default HistoryTransaksi;
