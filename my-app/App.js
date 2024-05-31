import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hello, Devs</Text>
                <Text style={styles.subheaderText}>14 tasks today</Text>
            </View>
            <View style={styles.searchAndFilterContainer}>
                <View style={styles.searchContainer}>
                    <MaterialCommunityIcons name="search" size={24} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInput}
                        placeholderTextColor="#999"
                    />
                </View>
                <TouchableOpacity style={styles.tuneIconContainer}>
                    <MaterialCommunityIcons name="tune" size={24} color="#ccc" style={styles.tuneIcon} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 700, paddingTop: 6}}>Categories</Text>
                <View>
                    <View>
                        <Text>Exercise</Text>
                        <Text>12 Tasks</Text>
                    </View>
                    <View>
                        <Text>Study</Text>
                        <Text>12 Tasks</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    headerContainer: {
        marginBottom: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subheaderText: {
        fontSize: 12,
        color: '#666',
    },
    searchAndFilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginRight: 16,
    },
    searchIcon: {
        marginRight: 8,
        color: '#999',
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
    },
    tuneIconContainer: {
        padding: 8,
        width: '11%',
        backgroundColor: 'green',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tuneIcon: {
        color: '#ccc',
    },
});