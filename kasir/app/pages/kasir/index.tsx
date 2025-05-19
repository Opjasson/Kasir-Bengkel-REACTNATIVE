import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

const Kasir = () => {
    const [find, setFind] = useState<string>();
    const [findLower, setFindLower] = useState<string>("");
    return (
        <View style={styles.container}>
            {/* bagian atas aplikasi kasir */}
            <View style={styles.headContainer}>
                <Ionicons name="menu" size={24} color="black" />
                <Text>Transaksi Baru</Text>
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

            <ScrollView>
                {/* menu bagian */}
                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                <View style={styles.containerMenu}>
                    <View style={styles.menu}>
                        <Text>Oli Fastron</Text>
                        <Text>Rp. 50.000</Text>
                        <Text>Stok : 100 pcs</Text>
                    </View>
                    <View style={styles.actionMenu}>
                        <View style={styles.menuIcon}>
                            <FontAwesome6 name="add" size={30} color="black" />
                        </View>

                        {/* <View style={styles.menuIcon}>
                        <Fontisto name="trash" size={24} color="black" />
                    </View> */}
                    </View>
                </View>

                {/* ------------ */}
            </ScrollView>

            <TouchableOpacity style={styles.containerCart} activeOpacity={1}  onPress={() => alert("hallo")}>
                <View style={styles.cartContent1}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                    <Text>Pcs : 2</Text>
                </View>

                <Text style={styles.cartContent2}>Total : Rp.20000</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headContainer: {
        flexDirection: "row",
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
    containerCart: {
        borderWidth: 2,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 7,
        height: 100,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "blue"
    },
    cartContent1: {
        flexDirection: "row"
    },
    cartContent2: {
    
    }
});

export default Kasir;
