import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

interface props {
    onPress1: () => void;
    onPress2: () => void;
    onPress3: () => void;
    toggleOpen: () => void;
}

const DrawerContent: React.FC<props> = ({
    toggleOpen,
    onPress1,
    onPress2,
    onPress3,
}) => {
    return (
        <View style={styles.animatedBox}>
            <View style={styles.sidebarHead}>
                <FontAwesome5 name="cash-register" size={28} color="black" />
                <Text style={styles.sidebarTitle}>Kasir Bengkel</Text>
            </View>

            <View style={styles.sidebarMain}>
                <TouchableOpacity onPress={onPress1}>
                    <Text style={styles.sidebarMenu}>Transaksi Baru</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress2}>
                    <Text style={styles.sidebarMenu}>Manage Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress3}>
                    <Text style={styles.sidebarMenu}>History transaksi</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.tutupSidebar}
                    onPress={toggleOpen}>
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
});

export default DrawerContent;
