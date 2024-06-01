import {StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View} from "react-native";
//import MySvg from "../assets/svg/person.svg";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


export default function TodoApp(){
return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Hello, Devs</Text>
                <Text style={styles.subheaderText}>14 tasks today</Text>
            </View>
        </View>
        <View style={styles.searchAndFilterContainer}>
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
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
            <Text style={{ fontSize: 20, fontWeight: 700, paddingTop: 6 }}>Categories</Text>
            <View>
                <FlatList
                    data={cardData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CardComponent title={item.title} subtitle={item.subtitle} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.cardContainer}
                />
            </View>
        </View>
    </View>
);
}
const cardData = [
    { id: 1, title: 'Exercise', subtitle: '12 Tasks' },
    { id: 2, title: 'Study', subtitle: '12 Tasks' },
    { id: 3, title: 'Work', subtitle: '8 Tasks' },
];

const CardComponent = ({ title, subtitle }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerTextContainer: {
        flex: 1,
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
    svgContainer: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    svg: {
        width: 32,
        height: 32,
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
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginHorizontal: 16,
        marginVertical: 8,
        width: 180,
        height: 180,
    },
    cardContent: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3,
        
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        
    },
});