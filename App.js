import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {


    // SECTION VISIBILITY STATES
    const [showRolex, setShowRolex] = useState(false);
    const [showAP, setShowAP] = useState(false);
    const [showPatek, setShowPatek] = useState(false);

    return (
        <ScrollView style={styles.container}>

            {/* MAIN TITLE */}
            <View style={styles.titleRow}>
                <Ionicons name="watch-outline" size={28} color="#0077b6" />
                <Text style={styles.title}>Watch Wishlist</Text>
            </View>



            {/* SECTION 1 — ROLEX */}
            <View style={styles.sectionBox}>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Ionicons name="time-outline" size={26} color="#0077b6" />
                    <Text style={styles.sectionTitle}>Rolex</Text>
                </View>

                {/* Expand / Collapse Button */}
                <TouchableOpacity style={styles.sectionButton} onPress={() => setShowRolex(!showRolex)}>
                    <Text style={styles.buttonText}>{showRolex ? "Hide Watches" : "Show Watches"}</Text>
                </TouchableOpacity>

                {/* Section Items */}
                {showRolex && (
                    <View style={styles.itemContainer}>

                        {/* Rolex Item 1 */}
                        <View style={styles.itemBox}>
                            <Image source={require('./img/Rolex.png')} style={styles.itemImage} />
                            <Text style={styles.itemName}>Rolex Submariner Date</Text>
                        </View>

                        {/* Rolex Item 2 */}
                        <View style={styles.itemBox}>
                            <Image source={require('./img/Rolex2.png')} style={styles.itemImage} />
                            <Text style={styles.itemName}>Rolex GMT Master II</Text>
                        </View>

                    </View>
                )}
            </View>


            {/* SECTION 2 — AUDEMARS PIGUET */}
            <View style={styles.sectionBox}>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Ionicons name="diamond-outline" size={26} color="#0077b6" />
                    <Text style={styles.sectionTitle}>Audemars Piguet</Text>
                </View>

                {/* Expand / Collapse Button */}
                <TouchableOpacity style={styles.sectionButton} onPress={() => setShowAP(!showAP)}>
                    <Text style={styles.buttonText}>{showAP ? "Hide Watches" : "Show Watches"}</Text>
                </TouchableOpacity>

                {/* Section Items */}
                {showAP && (
                    <View style={styles.itemContainer}>

                        {/* AP Item 1 */}
                        <View style={styles.itemBox}>
                            <Image source={require('./img/ap.png')} style={styles.itemImage} />
                            <Text style={styles.itemName}>AP Royal Oak Offshore</Text>
                        </View>

                        {/* AP Item 2 */}
                        <View style={styles.itemBox}>
                            <Image source={require('./img/ap2.png')} style={styles.itemImage} />
                            <Text style={styles.itemName}>AP Royal Oak Chrono</Text>
                        </View>

                    </View>
                )}
            </View>


            {/* SECTION 3 — PATEK PHILIPPE */}
            <View style={styles.sectionBox}>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Ionicons name="star-outline" size={26} color="#0077b6" />
                    <Text style={styles.sectionTitle}>Patek Philippe</Text>
                </View>

                {/* Expand / Collapse Button */}
                <TouchableOpacity style={styles.sectionButton} onPress={() => setShowPatek(!showPatek)}>
                    <Text style={styles.buttonText}>{showPatek ? "Hide Watches" : "Show Watches"}</Text>
                </TouchableOpacity>

                {/* Section Items */}
                {showPatek && (
                    <View style={styles.itemContainer}>

                        {/* Patek Item 1*/}
                        <View style={styles.itemBox}>
                            <Image source={require('./img/patek.png')} style={styles.itemImage} />
                            <Text style={styles.itemName}>Patek Nautilus 5711</Text>
                        </View>

                        {/* Patek Item 2*/}
                        <View style={styles.itemBox}>
                            <Image source={require('./img/patek2.png')} style={styles.itemImage} />
                            <Text style={styles.itemName}>Patek Aquanaut</Text>
                        </View>

                    </View>
                )}
            </View>

        </ScrollView>
    );
}


// STYLESHEET
const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 15,
    },

    // Main Title Row
    titleRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 25,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#0077b6",
    },

    // Section Wrapper Box
    sectionBox: {
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 30,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ccc",
    },

    // Header Row (Icon + Title)
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",   // <-- Align all headers nicely
        marginBottom: 12,
    },

    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 8,
    },

    // Expand/Collapse Button
    sectionButton: {
        backgroundColor: "#0077b6",
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 12,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
    },

    // Two items side-by-side
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    // Individual watch box
    itemBox: {
        width: "48%",
        backgroundColor: "#f8f8f8",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },

    itemImage: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginBottom: 8,
    },

    itemName: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "500",
    },
});
